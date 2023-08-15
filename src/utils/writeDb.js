import fs from "fs/promises"
import path from "path"

const pathDb = path.resolve("db", "fake-db.json")

/**
 * @typedef {{
 *     id: string;
 *     title: string;
 *     price: number;
 *     description: string;
 *     category: string;
 *     image: string;
 *     rating: {
 *       rate: number;
 *       count: number;
 *     };
 * }} Product
 *
 * @typedef {{
 *     "id-order": string;
 *     "id-user": string;
 *     products: {
 *         id: string;
 *         amount: number;
 *         "unit-price": number;
 *     };
 *     date: string;
 *     "date-formated": string;
 *     "total-price": number;
 * }} Order
 *
 * @param {{ products: Product[], orders: Order[] }} db
 *
 * @returns {string}
 */

const writeDb = async db => {
	const dbStr = JSON.stringify(db, null, 4)
	await fs.writeFile(pathDb, dbStr)

	return "Data Persisted OK"
}

export default writeDb
