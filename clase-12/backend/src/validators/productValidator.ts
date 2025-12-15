import { z } from "zod"

const productValidator = z.object({
  name: z.string("El nombre debe ser textual").min(3, "El nombre debe tener más de un caracter"),
  category: z.string().min(3, "El nombre debe tener más de un caracter").optional(),
  description: z.string().min(3, "El nombre debe tener más de un caracter").optional(),
  stock: z.number("El stock debe ser un número").int().min(0, "El stock debe ser un numero entero positivo mayor a 0").optional(),
  price: z.number("El precio debe ser un número").int().min(0, "El stock debe ser un numero entero positivo mayor a 0").optional(),
})

const updateProductValidator = productValidator.partial()

export { productValidator, updateProductValidator }