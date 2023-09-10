const { Model, DataTypes } = require("sequelize")
import { sequelize } from "../conection"
import { Users } from "./Users"

class OrdersDetails extends Model {}

OrdersDetails.init(
	{
		id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
		totItems: { type: DataTypes.BIGINT, allowNull: false },
		totPrice: { type: DataTypes.BIGINT, allowNull: false },
		userid: {
			type: DataTypes.BIGINT,
			references: {
				// This is a reference to another model
				model: Users,
				// This is the column name of the referenced model
				key: "idusers",
			},
		},
		datosEnvio: { type: DataTypes.STRING, allowNull: false },
		datosContacto: { type: DataTypes.STRING, allowNull: false },
	},
	{
		sequelize,
		modelName: "ordersdetails",
	}
)

export { OrdersDetails }
