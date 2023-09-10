"use strict"
import session from "express-session"

const getLogOutMiddleware = (req, res, next) => {
	session.destroy(function (err) {
		console.log(err)
	})
	req.dataToSend = { message: "LogOut Correcto" }
	req.statusCode = 200
	next()
}
export default getLogOutMiddleware
