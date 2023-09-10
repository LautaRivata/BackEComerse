"use strict"
import { OrdersDetails } from "../../db/models/OrdersDetails"
import { OrdersLists } from "../../db/models/OrdersLists"

/**
 *
 * @param {import("express").Request & { dataToSend: *, status: 200 | 400 }} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

const getOrderById = async (req, res, next) => {
	const { id } = req.params
	if (id != null) {
		try {
			const orderGet = await OrdersDetails.findByPk(id)
			if (orderGet.id == null) {
				req.dataToSend = { message: "La Orden No Existe" }
				req.statusCode = 400
			} else {
				const orderlist = await OrdersLists.findAll({
					where: { orderid: orderGet.id },
				})
				req.dataToSend = {
					ordersList: orderlist,
				}
				req.statusCode = 200
			}
		} catch (err) {
			console.log(err)
			req.dataToSend = { message: "La Orden No Existe" }
			req.statusCode = 400
		}
	} else {
		try {
			const orderGet = await OrdersDetails.findAll()
			req.dataToSend = {
				ordersDetails: orderGet,
			}
			req.statusCode = 200
		} catch (err) {
			console.log(err)
			req.dataToSend = { message: "Algo Salio Mal con la DB" }
			req.statusCode = 400
		}
	}
	next()
}

export default getOrderById
