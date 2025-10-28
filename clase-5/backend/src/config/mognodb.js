import mongoose from "mongoose"

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/node-mongo-utn")
    console.log("✅ Conectado con éxito a mongo db")
  } catch (e) {
    console.log("❌ Error al conectarse a la base de datos")
  }
}

export { connectDb }