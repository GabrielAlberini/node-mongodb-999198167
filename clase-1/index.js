import { sumar } from "./calculadora.js"

// let edad = 31
// edad = 32
// console.log(edad)

// Desestructuración
const numeros = [1, 2, 3, 4]
const persona = { id: 1, nombre: "Gabriel", edad: 32 }

const [, , segundoElemento] = numeros

// console.log(segundoElemento)

const { id, nombre, edad } = persona

// console.log(id, nombre, edad)

console.log(sumar(1, 2))

