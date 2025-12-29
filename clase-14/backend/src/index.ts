import express from "express"
import { connectDb } from "./config/mongodb"
import { ProductRouter } from "./routes/ProductRouter"
import { searchRouter } from "./routes/FilterRouter"
import { authRouter } from "./routes/AuthRouter"
import { authMiddleware } from "./middlewares/authMiddleware"
import cors from "cors"

process.loadEnvFile()

const PORT = process.env.PORT

const server = express()

// middleware
// habilitando la politica cors en las peticiones http
server.use(cors())
server.use(express.json())

server.get("/api", (req, res) => {
  res.json({ status: true })
})

// validar el token ANTES de enviar la petición al router de productos
// porque solo se enviariamos a aquellos usuarios validadados

server.use("/api/products", authMiddleware, ProductRouter)
// server.use("/api/purchases", ProductRouter)
// server.use("/api/providers", ProductRouter)
// server.use("/api/clients", ProductRouter)

server.use("/api/search", searchRouter)

// AUTENTICACIÓN
server.use("/auth", authRouter)

server.use((req, res) => {
  res.json({ error: "No existe el recurso" })
})

server.listen(PORT, () => {
  connectDb()
  console.log(`✅ Servidor http con express en escucha por el puerto http://localhost:${PORT}`)
})