"use strict"

import { Router } from "express"
import {
	getProductsMiddleware,
	postProductsMiddleware,
	putProductsMiddleware,
	delProductsMiddleware,
} from "../middlewares"
import { getProductsController, postProductsController } from "../controllers"

const router = Router()

const productsRoutes = router.get(
	"/",
	getProductsMiddleware,
	getProductsController
)

router.post("/", postProductsMiddleware, postProductsController)

router.put("/", putProductsMiddleware, postProductsController)

router.delete("/", delProductsMiddleware, postProductsController)

export default productsRoutes
