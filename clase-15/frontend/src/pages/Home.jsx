import { useEffect, useState } from "react"
import { getAllProducts } from "../services/api"

export const Home = () => {
  const [user, setUser] = useState(false)
  const [products, setProducts] = useState([])

  // const products = [
  //   {
  //     name: "Notebook Pro 14",
  //     category: "Tecnología",
  //     description: "Notebook de alto rendimiento para desarrollo y diseño.",
  //     stock: 5,
  //     price: 1200,
  //   },
  //   {
  //     name: "Auriculares Inalámbricos",
  //     category: "Accesorios",
  //     description: "Sonido premium con cancelación de ruido.",
  //     stock: 20,
  //     price: 150,
  //   },
  //   {
  //     name: "Mouse Gamer",
  //     category: "Periféricos",
  //     description: "Alta precisión y respuesta rápida.",
  //     stock: 12,
  //     price: 60,
  //   },
  //   {
  //     name: "Teclado Mecánico",
  //     category: "Periféricos",
  //     description: "Switches mecánicos y retroiluminación RGB.",
  //     stock: 8,
  //     price: 90,
  //   },
  // ]

  const fetchingData = async () => {
    try {
      const products = await getAllProducts()
      setProducts(products)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchingData()
  }, [])

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
              {/* ACTIONS */}
              {
                user && <div className="product__actions">
                  <button className="btn btn--edit">
                    Actualizar
                  </button>

                  <button className="btn btn--delete">
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
