import { Router } from "express"
import { register } from "../controllers/AuthController"

const authRouter = Router()

// "host"/auth

// "host"/auth/register
authRouter.post("/register", register)

export { authRouter }