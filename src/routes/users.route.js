"use strict"

import { Router } from "express"
import { getUsersByIdMiddleware, postUsersMiddleware } from "../middlewares"
import { getUsersByIdController, postUsersController } from "../controllers"
const { check, body, validationResult } = require("express-validator")

const router = Router()

const usersRoutes = router.get(
	"/:id?",
	getUsersByIdMiddleware,
	getUsersByIdController
)

router.post(
	"/",
	[
		body("idusers").isNumeric(),
		body("username").notEmpty(),
		body("userpass").isAlphanumeric().isLength({ min: 8, max: 40 }),
		body("name").notEmpty(),
		body("email").isEmail(),
		body("address").notEmpty(),
	],
	postUsersMiddleware,
	postUsersController
)

export default usersRoutes
