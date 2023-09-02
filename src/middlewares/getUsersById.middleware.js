"use strict"

const { Users } = require("../../db/models/Users")

const getUsersByIdMiddleware = async (req, res, next) => {
	const { id } = req.params
	let users
	if (id) {
		users = await Users.findByPk(id)
	} else {
		users = await Users.findAll()
	}
	req.dataToSend = users
	req.statusCode = 200

	next()
}

export default getUsersByIdMiddleware
