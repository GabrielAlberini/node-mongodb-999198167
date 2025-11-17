import express from "express"
import cors from "cors"
import { connectDb } from "./config/mongodb.js"
import { Product } from "./models/ProductModel.js"

const PORT = 1111

const server = express()
server.use(cors())
server.use(express.json())


// req -> request
// res -> response
server.get("/", (req, res) => {
  res.json({ status: true })
})

server.get("/search", async (req, res) => {
  try {
    const { category, name, minPrice, maxPrice } = req.query
    const query = {}

    if (category) query.category = new RegExp(category, "i")
    if (name) query.name = new RegExp(name, "i")
    if (minPrice) query.price = { ...query.price, $gt: Number(minPrice) }
    if (maxPrice) query.price = { ...query.price, $lt: Number(maxPrice) }

    const products = await Product.find(query)
    res.json({ success: true, data: products })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
})

// obtener los productos
server.get("/products", async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ success: false, error: "Error al obtener los productos" })
  }
})

server.post("/products", async (req, res) => {
  try {
    const { body } = req
    const { name, category, description, stock, price } = body

    if (!name || !description || !stock || !price) {
      return res.status(400).json({ success: false, error: "Data invalida" })
    }

    const newProduct = await Product.create({ name, category, description, stock, price })

    res.status(201).json({ success: true, data: newProduct })
  } catch (e) {
    res.status(500).json({ success: false, error: error.name })
  }
})

server.patch("/products/:id", async (req, res) => {
  try {
    const { body: updates } = req
    // cuál es el producto a editar
    const { id } = req.params
    const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true })

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        error: "No existe el producto."
      })
    }

    res.json({
      success: true,
      data: updatedProduct
    })
  } catch (error) {
    res.status(400).json({ success: false, error: error.name })
  }
})

server.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deletedProduct = await Product.findByIdAndDelete(id)

    if (!deletedProduct) {
      return res.status(404).json({ success: false, error: "No existe el producto." })
    }

    res.json({ success: true, data: deletedProduct })
  } catch (error) {
    res.status(400).json({ success: false, error: error.name })
  }
})

// 404 - no existe el recurso
server.use((req, res) => {
  res.json({ error: "No existe el recurso" })
})

server.listen(PORT, () => {
  connectDb()
  console.log(`✅ Servidor http con express en escucha por el puerto http://localhost:${PORT}`)
})