"use strict"

import { Router } from "express"
import { getCarritosMiddleware, putCarritosMiddleware } from "../middlewares"
import { getCarritosController } from "../controllers"

const router = Router()

const carritosRoutes = router.get(
	"/",
	getCarritosMiddleware,
	getCarritosController
)

router.put("/", putCarritosMiddleware, getCarritosController)

export default carritosRoutes
