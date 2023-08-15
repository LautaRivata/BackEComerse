import { readDb } from "../utils"

/**
 * Función que nos devolverá la lista completa de productos de nuestra base de datos.
 *
 * @returns
 */

const readAll = async () => {
	const db = await readDb()

	return db.products
}

const ProductsModel = {
	readAll,
}

export default ProductsModel
