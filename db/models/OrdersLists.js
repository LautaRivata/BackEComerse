const { Model, DataTypes } = require("sequelize")
import { sequelize } from "../conection"
import { Products } from "./Products"
import { OrdersDetails } from "./OrdersDetails"

class OrdersLists extends Model {}

OrdersLists.init(
	{
		id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
		cantidad: { type: DataTypes.BIGINT, allowNull: false },
		itemPrice: { type: DataTypes.BIGINT, allowNull: false },
		orderid: {
			type: DataTypes.BIGINT,
			references: {
				// This is a reference to another model
				model: OrdersDetails,

				// This is the column name of the referenced model
				key: "id",
			},
		},
		prodid: {
			type: DataTypes.BIGINT,
			references: {
				// This is a reference to another model
				model: Products,

				// This is the column name of the referenced model
				key: "id",
			},
		},
	},
	{
		sequelize,
		modelName: "orderslists",
	}
)

export { OrdersLists }
