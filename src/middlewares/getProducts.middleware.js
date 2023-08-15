"use strict"

import { ProductsModel } from "../models"
import { sleep } from "../utils"

/**
 *
 * @param {import("express").Request & { dataToSend: *, status: 200 | 400 }} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

const getProductsMiddleware = async (req, res, next) => {
	await sleep(2000)

	const products = await ProductsModel.readAll()

	req.dataToSend = products
	req.statusCode = 200

	next()
}

export default getProductsMiddleware
