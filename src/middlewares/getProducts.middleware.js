"use strict"

import { ProductsModel } from "../models"
import { sleep } from "../utils"
const axios = require("axios")

/**
 *
 * @param {import("express").Request & { dataToSend: *, status: 200 | 400 }} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

const getProductsMiddleware = async (req, res, next) => {
	let data = []
	let status = 400
	//con axios a https://fakestoreapi.com/products
	await axios
		.get("https://fakestoreapi.com/products")
		.then(function (response) {
			data = response.data
			status = 200
			console.log(response.data)
		})
		.catch(function (error) {
			console.log(error)
		})
		.finally(function () {
			req.dataToSend = data
			req.statusCode = status
		})
	next()
}

export default getProductsMiddleware
