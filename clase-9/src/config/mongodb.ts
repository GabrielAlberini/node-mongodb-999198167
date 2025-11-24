import mongoose from "mongoose"

const connectDb = async (uriDb: string) => {
  try {
    await mongoose.connect(uriDb)
    console.log("Conectado...")
  } catch (error) {
    console.log("Error al conectarse...")
  }
}

export { connectDb }