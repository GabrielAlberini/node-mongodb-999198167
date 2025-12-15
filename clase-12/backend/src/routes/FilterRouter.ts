import { Router } from "express"
import { searchQuery } from "../controllers/SearchController"

const searchRouter = Router()

searchRouter.get("/", searchQuery)

export { searchRouter }
