import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
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
const Product = mongoose.model("Product", productSchema)

export { Product }


