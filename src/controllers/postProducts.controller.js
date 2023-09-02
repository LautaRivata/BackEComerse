"use strict"

const postProductsController = async (req, res) => {
	return res.status(req.statusCode).json(req.dataToSend)
}

export default postProductsController
