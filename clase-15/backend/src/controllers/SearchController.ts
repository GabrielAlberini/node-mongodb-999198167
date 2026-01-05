import { Request, Response } from "express"
import { SearchQuery } from "../interfaces/SearchQuery"
import { Product } from "../models/ProductModel"

const searchQuery = async (req: Request, res: Response) => {
  try {
    const { category, name, minPrice, maxPrice } = req.query as SearchQuery

    const query: any = {}

    if (category) query.category = new RegExp(category, "i")
    if (name) query.name = new RegExp(name, "i")
    if (minPrice) query.price = { ...query.price, $gte: Number(minPrice) }
    if (maxPrice) query.price = { ...query.price, $lte: Number(maxPrice) }

    const products = await Product.find(query)
    res.json({ success: true, data: products })
  } catch (error) {
    const e = error as Error
    res.status(400).json({ success: false, error: e.message })
  }
}

export { searchQuery }

