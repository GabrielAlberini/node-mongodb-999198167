import { connectDb } from "./config/mongodb"
import { IProduct } from "./interfaces/IProduct"

const sumar2 = (n1: number, n2: number) => {
  return n1 + n2
}

// ascerción de tipo: number -> string
console.log(sumar2(1, 3))

let nombre = "Gabriel"

nombre = "ale"

const product: IProduct = {
  name: "Pc",
  description: "",
  price: 1000,
  stock: "No disponible",
  category: "Electrónica",
}

const product2: IProduct = {
  name: "Celular",
  price: 500,
  stock: 0,
  category: "Electrónica",
}


console.log(product)
