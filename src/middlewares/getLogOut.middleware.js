"use strict"

const getLogOutMiddleware = (req, res, next) => {
	req.session.destroy(function (err) {
		console.log(err)
	})
	req.dataToSend = { message: "LogOut Correcto" }
	req.statusCode = 200
	next()
}
export default getLogOutMiddleware
