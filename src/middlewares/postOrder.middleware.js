"use strict"

import { OrdersDetails } from "../../db/models/OrdersDetails"
import { OrdersLists } from "../../db/models/OrdersLists"
import { orderValidator, listValidator } from "../hackaton-utilities"

/**
 *
 * @param {import("express").Request & { dataToSend: *, status: 200 | 400 }} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

const postOrderMiddleware = async (req, res, next) => {
	const orderList = req.body.orderProducts
	const ordersDetails = req.body.orderDetails
	console.log(ordersDetails)
	console.log(orderList)
	// if (!orderValidator(ordersDetails)) {
	// 	req.dataToSend = { message: "El ordersDetails recibido no es válido!" }
	// 	req.statusCode = 400
	// 	next()
	// }
	// if (!listValidator(orderList)) {
	// 	req.dataToSend = { message: "El ordersList recibido no es válido!" }
	// 	req.statusCode = 400
	// 	next()
	// }
	try {
		const orderCurso = await OrdersDetails.create(ordersDetails)
		let volatil = {}
		for (let i = 0; i < orderList.length; i++) {
			volatil = {
				cantidad: orderList[i].cantidad,
				itemPrice: orderList[i].product.price,
				orderid: orderCurso.id,
				prodid: orderList[i].product.primarikey,
			}
			console.log(volatil)
			await OrdersLists.create(volatil)
		}
		req.dataToSend = { message: "Orden Generada, Gracias Por tu Compra" }
		req.statusCode = 200
	} catch (err) {
		console.log(err)
		req.dataToSend = { message: "El body recibido no es válido!" }
		req.statusCode = 400
	}

	next()
}

export default postOrderMiddleware
