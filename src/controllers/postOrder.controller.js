"use strict"

// import {} from "../hackaton-utilities"

/**
 *
 * @param {import("express").Request & { dataToSend: any }} req
 * @param {import("express").Response} res
 * @returns
 */

const postOrderController = async (req, res) => {
	return res.status(req.statusCode).json(req.dataToSend)
}

export default postOrderController
