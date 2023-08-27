"use strict"

const { User } = require("../../db/models/User")

const getUsersByIdMiddleware = async (req, res, next) => {
	const { id } = req.params
	let users
	if (id) {
		users = await User.findByPk(id)
	} else {
		users = await User.findAll()
	}
	req.dataToSend = users
	req.statusCode = 200

	next()
}

export default getUsersByIdMiddleware
