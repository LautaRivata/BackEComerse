"use strict"

import { Products } from "../../db/models/Products"

const putProductsMiddleware = async (req, res, next) => {
	let editProduct = req.body
	try {
		let editDB = await Products.findByPk(editProduct.id)
		editDB.title = editProduct.title
		editDB.price = editProduct.price
		editDB.description = editProduct.description
		editDB.image = editProduct.image
		editDB.category = editProduct.category
		await editDB.save()
		req.dataToSend = { message: "Producto Editado Correctamente" }
		req.statusCode = 200
	} catch (err) {
		console.log(err)
		req.dataToSend = { message: "Error en DB" }
		req.statusCode = 500
	}
	next()
}
export default putProductsMiddleware
