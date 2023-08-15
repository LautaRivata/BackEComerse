"use strict"

/**
 *
 * @param {import("express").Request & { dataToSend: * }} req
 * @param {import("express").Response} res
 * @returns
 */

const getProductsController = async (req, res) => {
	return res.status(req.statusCode).json(req.dataToSend)
}

export default getProductsController
