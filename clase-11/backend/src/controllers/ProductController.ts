import { Request, Response } from "express"
import { Product } from "../models/ProductModel"

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
    const { name, category, description, stock, price } = body

    if (!name || !description || !stock || !price) {
      return res.status(400).json({ success: false, error: "Data invalida" })
    }

    const newProduct = await Product.create({ name, category, description, stock, price })

    res.status(201).json({ success: true, data: newProduct })
  } catch (error) {
    const e = error as Error
    res.status(500).json({ success: false, error: e.name })
  }
}

const updateProduct = async (req: Request, res: Response) => {
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