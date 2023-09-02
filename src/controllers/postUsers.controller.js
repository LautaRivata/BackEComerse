"use strict"

const postUsersController = async (req, res) => {
	return res.status(req.statusCode).json(req.dataToSend)
}

export default postUsersController
