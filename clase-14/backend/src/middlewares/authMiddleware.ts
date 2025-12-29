import { NextFunction, Request, Response } from "express";
import jwt, { DecodeOptions } from "jsonwebtoken"

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ success: false, error: "debes incluir un token en tu petición" })
  }

  if (!authorization.startsWith("Bearer")) {
    return res.status(401).json({ success: false, error: "debes incluir un token formato jwt" })
  }

  const token = authorization.split(" ")[1]

  const secret = "passSuperSegura"

  const decode = jwt.decode(token, secret as DecodeOptions)

  console.log(decode)

  next()
}

export { authMiddleware }