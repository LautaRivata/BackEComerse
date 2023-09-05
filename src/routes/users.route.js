"use strict"

import { Router } from "express"
import {
	getUsersByIdMiddleware,
	postUsersMiddleware,
	postLoginMiddleware,
} from "../middlewares"
import { postUsersController } from "../controllers"
const { check, body, validationResult } = require("express-validator")

const router = Router()

const usersRoutes = router.get(
	"/:id?",
	getUsersByIdMiddleware,
	postUsersController
)

router.post(
	"/",
	[
		body("username").notEmpty(),
		body("userpass").notEmpty(),
		body("name").notEmpty(),
		body("email").isEmail(),
		body("address").notEmpty(),
	],
	postUsersMiddleware,
	postUsersController
)

router.post(
	"/login",
	[body("username").notEmpty(), body("userpass").notEmpty()],
	postLoginMiddleware,
	postUsersController
)

export default usersRoutes
