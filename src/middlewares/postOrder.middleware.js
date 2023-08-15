"use strict"

import { OrdersModel } from "../models"
import { orderValidator } from "../hackaton-utilities"

/**
 *
 * @param {import("express").Request & { dataToSend: *, status: 200 | 400 }} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

const postOrderMiddleware = async (req, res, next) => {
	const order = req.body

	if (!orderValidator(order)) {
		req.dataToSend = { message: "El body recibido no es válido!" }
		req.statusCode = 400

		next()
	}

	await OrdersModel.create(order)

	req.dataToSend = { message: "éxito!" }
	req.statusCode = 200

	next()
}

export default postOrderMiddleware
