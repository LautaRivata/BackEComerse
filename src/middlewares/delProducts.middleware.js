"use strict"

import { Products } from "../../db/models/Products"

const delProductsMiddleware = async (req, res, next) => {
	let editProduct = req.body
	try {
		const delDB = await Products.findByPk(editProduct.id)
		delDB.destroy()
		req.dataToSend = { message: "Producto Eliminado Correctamente" }
		req.statusCode = 200
	} catch (err) {
		console.log(err)
		req.dataToSend = { message: "Error en DB" }
		req.statusCode = 500
	}
	next()
}
export default delProductsMiddleware
