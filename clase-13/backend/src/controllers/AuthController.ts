import { Request, Response } from "express"
import { User } from "../models/AuthModel"
import bcrypt from "bcryptjs"

const register = async (req: Request, res: Response) => {
  try {
    const { body } = req
    const { username, email, password } = body

    if (!email || !password) {
      return res.json({ error: "data invalida" })
    }

    // validar que el usuario no exista en la db

    const foundUser = await User.findOne({ email })

    if (foundUser) {
      return res.status(409).json({ error: "El usuario ya existe en nuestra base de datos" })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const createdUser = await User.create({ username, email, password: hashPassword })

    const publicDataUser = { username: createdUser.username, email: createdUser.email }

    res.status(201).json(publicDataUser)
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" })
  }
}

const login = (req: Request, res: Response) => {
  try {
    // recibir email y contraseña
    // que el user exista en la db
    // resolver que la pass sea la correcta
    // credencial que habilita una sesión -> jsonwebtoken

    // JWT 
    // info publica del user logeado
    // hasta cuando el usuario puede usar la app
    // validar la veracidad de la credencial
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" })
  }
}

export { register }