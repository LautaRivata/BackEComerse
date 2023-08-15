"use strict"

import { Router } from "express"
import { postOrderMiddleware } from "../middlewares"
import { postOrderController, getOrderByIdController } from "../controllers"
import { getOrderById } from "../hackaton-utilities"

const router = Router()

const ordersRoutes = router
	.get("/:id", getOrderById, getOrderByIdController)
	.post("/", postOrderMiddleware, postOrderController)

export default ordersRoutes
