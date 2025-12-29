import { Document, Model, Schema, model } from "mongoose";

interface IProduct extends Document {
  name: string
  category: string
  description: string
  stock: number
  price: number
  createdAt?: Date
  updatedAt?: Date
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  category: { type: String, default: "Sin categoria" },
  description: { type: String, default: "Sin descripción" },
  stock: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 }
}, {
  versionKey: false,
  timestamps: true
})

// interface para los métodos de mongodb
// Product.find()
const Product: Model<IProduct> = model<IProduct>("Product", productSchema)

export { Product }

