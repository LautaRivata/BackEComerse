"use strict"

import { Router } from "express"
import { getProductsMiddleware, postProductsMiddleware } from "../middlewares"
import { getProductsController, postProductsController } from "../controllers"

const router = Router()

const productsRoutes = router.get(
	"/",
	getProductsMiddleware,
	getProductsController
)

router.post("/", postProductsMiddleware, postProductsController)
export default productsRoutes
