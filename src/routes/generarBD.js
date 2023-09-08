"use strict"

import { Router } from "express"
import { postGenerarDBMiddleware } from "../middlewares"
import { postUsersController } from "../controllers"

const router = Router()

const generarDBRoutes = router.post(
	"/",
	postGenerarDBMiddleware,
	postUsersController
)

export default generarDBRoutes
