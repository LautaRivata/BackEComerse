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
 * @returns {Promise<{ products: Product[], orders: Order[] }>}
 */

const readDb = async () => {
	const dbStr = await fs.readFile(pathDb, "utf-8")
	const db = JSON.parse(dbStr)

	return db
}

export default readDb
