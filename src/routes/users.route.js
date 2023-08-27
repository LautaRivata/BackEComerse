"use strict"

import { Router } from "express"
import { getUsersByIdMiddleware } from "../middlewares"
import { getUsersByIdController } from "../controllers"

const router = Router()

const usersRoutes = router.get(
	"/:id?",
	getUsersByIdMiddleware,
	getUsersByIdController
)

export default usersRoutes
