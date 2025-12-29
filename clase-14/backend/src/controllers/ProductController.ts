import { Request, Response } from "express"
import { Product } from "../models/ProductModel"
import { productValidator, updateProductValidator } from "../validators/productValidator"

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ success: false, error: "Error al obtener los productos" })
  }
}

const addNewProduct = async (req: Request, res: Response) => {
  try {
    const { body } = req

    const responseValidator = productValidator.safeParse(body)

    if (!responseValidator.success) {
      return res.status(404).json({
        success: false,
        error: responseValidator.error.format()
      })
    }

    const newProduct = await Product.create(body)

    res.status(201).json({ success: true, data: newProduct })
  } catch (error) {
    const e = error as Error
    console.log(e)
    res.status(500).json({ success: false, error: e.name })
  }
}

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { body: updates } = req
    // cuál es el producto a editar
    const { id } = req.params

    const responseValidator = updateProductValidator.safeParse(updates)

    if (!responseValidator.success) {
      return res.status(404).json({
        success: false,
        error: responseValidator.error.format()
      })
    }

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
    const e = error as Error
    res.status(400).json({ success: false, error: e.name })
  }
}

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deletedProduct = await Product.findByIdAndDelete(id)

    if (!deletedProduct) {
      return res.status(404).json({ success: false, error: "No existe el producto." })
    }

    res.json({ success: true, data: deletedProduct })
  } catch (error) {
    const e = error as Error
    res.status(400).json({ success: false, error: e.name })
  }
}

export { getProducts, addNewProduct, updateProduct, deleteProduct }