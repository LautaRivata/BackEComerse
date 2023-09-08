"use strict"

import { Router } from "express"
import {
	getUsersByIdMiddleware,
	postUsersMiddleware,
	postLoginMiddleware,
	getLogOutMiddleware,
} from "../middlewares"
import { postUsersController } from "../controllers"
const { body } = require("express-validator")

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

router.get("/logout", getLogOutMiddleware, postUsersController)

export default usersRoutes
