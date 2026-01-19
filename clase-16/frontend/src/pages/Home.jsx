import { useEffect, useState } from "react"
import { addNewProduct, deleteProduct, getAllProducts, updateProduct } from "../services/api.js"
import { useAuth } from "../context/AuthContext.jsx"

export const Home = () => {
  const [products, setProducts] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: 0,
    stock: 0
  })
  const [idEditingProduct, setIdEditingProduct] = useState(null)

  const { user } = useAuth()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const parsedData = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock)
    }
    try {
      if (idEditingProduct) {
        await updateProduct(idEditingProduct, parsedData)
      } else {
        await addNewProduct(parsedData)
      }
      fetchingData()
    } catch (error) {
      console.log(error.message)
    } finally {
      setFormData({
        name: "",
        category: "",
        description: "",
        price: 0,
        stock: 0
      })
    }
  }

  const fetchingData = async () => {
    try {
      const res = await getAllProducts()
      const products = res.data
      setProducts(products)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchingData()
  }, [])

  const handleDelete = async (id) => {
    try {
      const confirmed = confirm("¿Estás seguro de que deseas eliminar este producto?")
      if (confirmed) {
        await deleteProduct(id)
        fetchingData()
      }
    } catch (error) {
      console
    }
  }

  const handleEditProduct = (product) => {
    setIdEditingProduct(product._id)
    setFormData({
      name: product.name,
      category: product.category,
      description: product.description,
      price: product.price,
      stock: product.stock
    })
  }

  return (
    <main className="home">
      {/* HERO */}
      <section className="home__hero">
        <h1>Bienvenido a Nuestra Tienda</h1>
        <button onClick={() => setUser(user === false ? true : false)}>Loggear user</button>
        <p>
          Descubrí productos seleccionados con calidad garantizada y stock
          disponible.
        </p>
      </section>

      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre del producto"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="text"
            name="category"
            placeholder="Categoria"
            onChange={handleChange}
            value={formData.category}
          />
          <input
            type="text"
            placeholder="Descripción"
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
          <input
            type="number"
            placeholder="Stock"
            name="stock"
            onChange={handleChange}
            value={formData.stock}
          />
          <input
            type="number"
            placeholder="Precio"
            name="price"
            onChange={handleChange}
            value={formData.price}
          />
          <button>{idEditingProduct ? "Actualizar" : "Agregar"}</button>
        </form>
      </section>

      {/* PRODUCTOS */}
      <section className="home__products">
        <h2>Productos destacados</h2>

        <div className="products__grid">
          {products.map((product, index) => (
            <article className="product__card" key={index}>
              <div className="product__header">
                <h3>{product.name}</h3>
                <span className="product__category">
                  {product.category}
                </span>
              </div>

              <p className="product__description">
                {product.description}
              </p>

              <div className="product__footer">
                <span className="product__price">
                  ${product.price}
                </span>

                <span
                  className={`product__stock ${product.stock > 0 ? "in-stock" : "out-stock"
                    }`}
                >
                  Stock: {product.stock}
                </span>
              </div>
              {
                user && <div className="product__actions">
                  <button onClick={() => handleEditProduct(product)} className="btn btn--edit">
                    Actualizar
                  </button>

                  <button onClick={() => handleDelete(product._id)} className="btn btn--delete">
                    Borrar
                  </button>
                </div>
              }
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
