"use strict"

import { Products } from "../../db/models/Products"
import { Users } from "../../db/models/Users"
import { Carritos } from "../../db/models/Carritos"
import session from "express-session"

const putCarritosMiddleware = async (req, res, next) => {
	const userid = session.userid
	const prodid = req.body.productID
	const cantidad = req.body.cant
	if (userid) {
		if (userid != req.body.userID) {
			console.log("Error de sincro de usuario")
			req.dataToSend = { message: "Error de sincro de usuario" }
			req.statusCode = 500
		} else {
			try {
				await Carritos.create({ userid, prodid, cantidad })
				req.dataToSend = { message: "Producto Agregado Correctamente" }
				req.statusCode = 200
			} catch (err) {
				console.log(err)
				req.dataToSend = { message: "Error en DB" }
				req.statusCode = 500
			}
		}
	} else {
		req.dataToSend = { message: "Usuario debe Loggearse" }
		req.statusCode = 500
	}
	next()
}
export default putCarritosMiddleware
