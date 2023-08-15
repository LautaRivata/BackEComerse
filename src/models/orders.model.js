import { readDb, writeDb } from "../utils"

/**
 * Función que creará una orden nueva al final de la lista de ordenes, dentro de nuestra base de datos.
 *
 * @typedef {Awaited<ReturnType<readDb>>["orders"][0]} Order
 *
 *
 * @param {Order} order
 * @returns
 */

const create = async order => {
	const db = await readDb()
	db.orders.push(order)

	return writeDb(db)
}

/**
 * Función que nos devolverá la lista completa de ordenes de nuestra base de datos.
 *
 * @returns
 */

const readAll = async () => {
	const db = await readDb()

	return db.orders
}

/**
 * Función que acepta una lista de ordenes, para sobreescribirlas todas en nuestra base de datos.
 *
 * **¡Precaución!**
 *
 * Recordar que sobreescribirá todas las órdenes.
 *
 * @typedef {Awaited<ReturnType<readAll>>} Orders
 *
 * @param {Orders} orders
 * @returns
 */

const writeAll = async orders => {
	const db = await readDb()
	db.orders = orders

	return writeDb(db)
}

const OrdersModel = {
	create,
	readAll,
	writeAll,
}

export default OrdersModel
