import { Router } from "express"
import { addNewProduct, deleteProduct, getProducts, updateProduct } from "../controllers/ProductController"

const ProductRouter = Router()

// "host"/products -> localhost -> render

ProductRouter.get("/", getProducts)
ProductRouter.post("/", addNewProduct)
ProductRouter.patch("/:id", updateProduct)
ProductRouter.delete("/:id", deleteProduct)

export { ProductRouter }