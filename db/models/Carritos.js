const { Model, DataTypes } = require("sequelize")
import { sequelize } from "../conection"
import { Products } from "./Products"
import { Users } from "./Users"

class Carritos extends Model {}

Carritos.init(
	{
		id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
		cantidad: { type: DataTypes.BIGINT, allowNull: false },
		userid: {
			type: DataTypes.BIGINT,
			references: {
				// This is a reference to another model
				model: Users,

				// This is the column name of the referenced model
				key: "idusers",
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
		modelName: "carritos",
	}
)

export { Carritos }
