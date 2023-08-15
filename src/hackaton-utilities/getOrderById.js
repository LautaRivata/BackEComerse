"use strict"

import { OrdersModel } from "../models"
import { sleep, peek } from "../utils"

/**
 *
 * @param {import("express").Request & { dataToSend: *, status: 200 | 400 }} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

const getOrderById = async (req, res, next) => {
	const { id } = req.params

	req.dataToSend = {}
	req.statusCode = 200
	next()
}

export default getOrderById
