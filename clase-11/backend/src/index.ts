import express from "express"
import cors from "cors"
import { connectDb } from "./config/mongodb"
import { Product } from "./models/ProductModel"
import { SearchQuery } from "./interfaces/SearchQuery"
import { ProductRouter } from "./routes/ProductRouter"

const PORT = 1111

const server = express()
server.use(cors())
server.use(express.json())

server.get("/", (req, res) => {
  res.json({ status: true })
})
server.use("/products", ProductRouter)

server.get("/search", async (req, res) => {
  try {
    const { category, name, minPrice, maxPrice } = req.query as SearchQuery

    const query: any = {}

    if (category) query.category = new RegExp(category, "i")
    if (name) query.name = new RegExp(name, "i")
    if (minPrice) query.price = { ...query.price, $gt: Number(minPrice) }
    if (maxPrice) query.price = { ...query.price, $lt: Number(maxPrice) }

    const products = await Product.find(query)
    res.json({ success: true, data: products })
  } catch (error) {
    const e = error as Error
    res.status(400).json({ success: false, error: e.message })
  }
})

server.use((req, res) => {
  res.json({ error: "No existe el recurso" })
})

server.listen(PORT, () => {
  connectDb()
  console.log(`✅ Servidor http con express en escucha por el puerto http://localhost:${PORT}`)
})