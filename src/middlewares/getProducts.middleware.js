"use strict"

const { Products } = require("../../db/models/Products")

/**
 *
 * @param {import("express").Request & { dataToSend: *, status: 200 | 400 }} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

const getProductsMiddleware = async (req, res, next) => {
	let data = []
	let status = 500
	//con axios a https://fakestoreapi.com/products
	data = await Products.findAll()
		.then(function (data) {
			req.dataToSend = data
			status = 200
		})
		.finally(function () {
			req.statusCode = status
		})
	next()
}

export default getProductsMiddleware
