"use strict"

import { Products } from "../../db/models/Products"

const postProductsMiddleware = async (req, res, next) => {
	let editProduct = req.body
	try {
		await Products.create(editProduct)
		req.dataToSend = { message: "Producto Creado Correctamente" }
		req.statusCode = 200
	} catch (err) {
		console.log(err)
		req.dataToSend = { message: "Error en DB" }
		req.statusCode = 500
	}
	next()
}
export default postProductsMiddleware
