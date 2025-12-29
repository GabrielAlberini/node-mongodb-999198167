import { Request, Response } from "express"
import { User } from "../models/AuthModel"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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

const login = async (req: Request, res: Response) => {
  try {
    // recibir email y contraseña
    const { email, password } = req.body

    // implementar zod para validar la data 
    if (!email || !password) {
      return res.status(400).json({ success: false, error: "data invalida" })
    }

    // que el user exista en la db
    const foundUser = await User.findOne({ email })

    if (!foundUser) {
      return res.status(401).json({ success: false, error: "desautorizado" })
    }

    const validatePass = await bcrypt.compare(password, foundUser.password)

    // resolver que la pass sea la correcta
    if (!validatePass) {
      return res.status(401).json({ success: false, error: "contraseña incorrecta" })
    }

    // credencial que habilita una sesión -> jsonwebtoken
    // 1 - payload
    // 2 - secret key
    // 3 - options

    const payload = {
      _id: foundUser._id,
      username: foundUser.username,
      email: foundUser.email
    }

    const token = jwt.sign(payload, "passSuperSegura", { expiresIn: "1h" })

    // JWT 
    // info publica del user logeado
    // hasta cuando el usuario puede usar la app
    // validar la veracidad de la credencial

    res.json({ token })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error interno del servidor" })
  }
}

export { register, login }