"use strict"

import express from "express"
import morgan from "morgan"
import {
	ordersRoutes,
	productsRoutes,
	usersRoutes,
	generarDBRoutes,
	carritosRoutes,
} from "./routes"
import { sequelize } from "../db/conection"

const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const session = require("express-session")
const cors = require("cors")
const path = require("path")
const Products = require("../db/models/Products")
const Users = require("../db/models/Users")
const OrdersDetails = require("../db/models/OrdersDetails")
const OrdersLists = require("../db/models/OrdersLists")

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
app.use("/api/generarDB", generarDBRoutes)
app.use("/api/carritos", carritosRoutes)

app.listen(PORT, () => {
	console.log("Listening in port", PORT)
	sequelize
		.sync({ force: false })
		.then(() => {
			console.log("DBConectada")
		})
		.catch(err => {
			console.log("Error en DB")
			console.log(err)
		})
})
