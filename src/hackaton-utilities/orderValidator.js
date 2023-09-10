"use strict"
const { query, validationResult, body } = require("express-validator")

const orderValidator = orderDetails => {
	orderDetails.totItems.notEmpty()
	orderDetails.totPrice.notEmpty()
	orderDetails.userid.notEmpty()
	orderDetails.datosEnvio.notEmpty()
	orderDetails.datosContacto.notEmpty()

	if (validationResult()) {
		return true
	} else {
		return false
	}
}

export default orderValidator
