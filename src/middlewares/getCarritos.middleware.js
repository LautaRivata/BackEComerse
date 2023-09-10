"use strict"

import { Products } from "../../db/models/Products"
import { Users } from "../../db/models/Users"
import { Carritos } from "../../db/models/Carritos"

const getCarritosMiddleware = async (req, res, next) => {
	const userid = req.session.userid
	if (userid) {
		console.log(userid)
		// try {
		//     const delDB = await Users.findAll(editProduct.id)
		//     delDB.destroy()
		//     req.dataToSend = { message: "Producto Eliminado Correctamente" }
		//     req.statusCode = 200
		// } catch (err) {
		//     console.log(err)
		//     req.dataToSend = { message: "Error en DB" }
		//     req.statusCode = 500
		// }
	} else {
		console.log("Aun not ready")
	}
	req.dataToSend = { message: "Usuario debe Loggearse" }
	req.statusCode = 500
	next()
}
export default getCarritosMiddleware
