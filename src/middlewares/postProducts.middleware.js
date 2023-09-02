"use strict"

import { Products } from "../../db/models/Products"

const postProductsMiddleware = async (req, res, next) => {
	req.dataToSend = { message: "éxito!" }
	req.statusCode = 200

	next()
}
export default postProductsMiddleware
