"use strict"

const { Users } = require("../../db/models/Users")
const { validationResult } = require("express-validator")

/**
 *
 * @param {import("express").Request & { dataToSend: *, status: 200 | 400 }} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

const postUsersMiddleware = async (req, res, next) => {
	let newUser = req.body
	const errors = validationResult(req)
	console.log(errors)

	if (!errors.isEmpty()) {
		console.log("entre al error")
		req.dataToSend = {
			success: false,
			message: "El body recibido no es válido!",
		}
		req.statusCode = 400
		next()
	} else {
		console.log("entre al guardar")
		await Users.create(newUser)
		req.dataToSend = {
			success: true,
			message: "Usuario Creado Correctamente",
		}
		req.statusCode = 200
		next()
	}
}

export default postUsersMiddleware
