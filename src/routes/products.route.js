"use strict"

import { Router } from "express"
import { getProductsMiddleware } from "../middlewares"
import { getProductsController } from "../controllers"

const router = Router()

const productsRoutes = router.get(
	"/",
	getProductsMiddleware,
	getProductsController
)

export default productsRoutes
