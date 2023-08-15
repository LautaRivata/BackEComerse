"use strict"

import express from "express"
import morgan from "morgan"
import { ordersRoutes, productsRoutes } from "./routes"

const app = express()
const PORT = 8080

app.disable("etag")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.use("/api/products", productsRoutes)
app.use("/api/orders", ordersRoutes)

app.listen(PORT, () => console.log("Listening in port", PORT))
