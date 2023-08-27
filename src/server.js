"use strict"

import express from "express"
import morgan from "morgan"
import { ordersRoutes, productsRoutes, usersRoutes } from "./routes"
import { sequelize } from "../db/conection"

const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const session = require("express-session")
const cors = require("cors")
const path = require("path")

const app = express()
const PORT = 8080
const unaHora = 1000 * 60 * 60 * 1

app.disable("etag")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(
	session({
		secret: "1q2w3e4r",
		saveUninitialized: true,
		cookie: { maxAge: unaHora },
		resave: false,
	})
)
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use(cors())

app.use("/api/products", productsRoutes)
app.use("/api/orders", ordersRoutes)
app.use("/api/users", usersRoutes)

app.listen(PORT, () => {
	console.log("Listening in port", PORT)
	sequelize
		.authenticate()
		.then(() => {
			console.log("DBConectada")
		})
		.catch(() => {
			s
			console.log("Error en DB")
		})
})
