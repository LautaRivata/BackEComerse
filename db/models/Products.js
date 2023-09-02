const { Model, DataTypes } = require("sequelize")
import { sequelize } from "../conection"

class Products extends Model {}

Products.init(
	{
		id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
		title: { type: DataTypes.STRING, allowNull: false },
		price: { type: DataTypes.STRING, allowNull: true },
		description: { type: DataTypes.STRING, allowNull: true },
		category: { type: DataTypes.STRING, allowNull: true },
		image: { type: DataTypes.STRING, allowNull: true },
		rating: { type: DataTypes.STRING, allowNull: true },
		views: { type: DataTypes.TEXT, allowNull: true },
	},
	{
		sequelize,
		modelName: "products",
	}
)
export { Products }
