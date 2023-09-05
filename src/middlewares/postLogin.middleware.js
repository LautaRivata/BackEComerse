"use strict"

const { Users } = require("../../db/models/Users")
const { validationResult } = require("express-validator")

const postLoginMiddleware = async (req, res, next) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		console.log("El body recibido no es válido!")
		req.dataToSend = { message: "El body recibido no es válido!" }
		req.statusCode = 400
		next()
	}
	const { body } = req
	let userDB

	userDB = await Users.findOne({
		where: { username: body.username },
	})
	if (userDB === null) {
		console.log("El Usuario no Existe!")
		req.dataToSend = { message: "El Usuario no Existe!" }
		req.statusCode = 400
		next()
	} else {
		console.log(userDB)
		console.log(body.userpass)
		if (userDB.userpass === body.userpass) {
			console.log("usuario loggeado")
			req.dataToSend = {
				user: userDB.username,
				message: "Usuario Loggeado Correctamente",
				log: true,
			}
			req.statusCode = 200
		} else {
			console.log("usuario No loggeado")
			req.dataToSend = {
				message: "Contrasena Incorrecta",
				log: false,
			}
			req.statusCode = 400
		}
		next()
	}
}

export default postLoginMiddleware
