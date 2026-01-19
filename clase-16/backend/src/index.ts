import express from "express"
import { connectDb } from "./config/mongodb"
import { ProductRouter } from "./routes/ProductRouter"
import { searchRouter } from "./routes/FilterRouter"
import { authRouter } from "./routes/AuthRouter"
import { authMiddleware } from "./middlewares/authMiddleware"
import cors from "cors"
import { config as dotenvConfig } from "dotenv"
dotenvConfig()

process.loadEnvFile()

const PORT = process.env.PORT

const server = express()

server.use(cors())
server.use(express.json())

server.get("/api", (req, res) => {
  res.json({ status: true })
})

server.use("/api/products", ProductRouter)
server.use("/api/search", searchRouter)

// AUTENTICACIÓN
server.use("/api/auth", authRouter)

server.use((req, res) => {
  res.json({ error: "No existe el recurso" })
})

server.listen(PORT, () => {
  connectDb()
  console.log(`✅ Servidor http con express en escucha por el puerto http://localhost:${PORT}`)
})