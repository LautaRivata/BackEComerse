"use strict"

/**
 *
 * @param {import("express").Request & { dataToSend: * }} req
 * @param {import("express").Response} res
 * @returns
 */

const getCarritosController = async (req, res) => {
	return res.status(req.statusCode).json(req.dataToSend)
}

export default getCarritosController
