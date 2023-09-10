"use strict"
const { query, validationResult } = require("express-validator")

const listValidator = orderList => {
	query("product").notEmpty()

	if (validationResult()) {
		return true
	} else {
		return false
	}
}

export default listValidator
