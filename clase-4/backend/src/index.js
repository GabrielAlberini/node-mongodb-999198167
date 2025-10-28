import fs from "node:fs"
import express from "express"
import cors from "cors"

const FILE_PATH = "./src/db/products.json"
const PORT = 1111

const readProducts = () => JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"))
const writeProducts = (products) => fs.writeFileSync(FILE_PATH, JSON.stringify(products))

const server = express()
server.use(cors())
server.use(express.json())

// req -> request
// res -> response
server.get("/", (req, res) => {
  res.json({ status: true })
})

// obtener los productos
server.get("/products", (req, res) => {
  const products = readProducts()
  res.json(products)
})

server.post("/products", (req, res) => {
  const { body } = req

  const { name, category, description, stock, price } = body

  // lógica de negocio
  const newProduct = {
    id: crypto.randomUUID(),
    name,
    category: category || "Sin categoria",
    price: Number(price),
    stock: Number(stock),
    description: description || "Sin descripción"
  }

  const products = readProducts()
  products.push(newProduct)

  // reescribir la base de datos
  writeProducts(products)

  res.json(newProduct)
})

// 404 - no existe el recurso
server.use((req, res) => {
  res.json({ error: "No existe el recurso" })
})

server.listen(PORT, () => {
  console.log(`✅ Servidor http con express en escucha por el puerto http://localhost:${PORT}`)
})