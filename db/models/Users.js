const { Model, DataTypes } = require("sequelize")
import { sequelize } from "../conection"

class Users extends Model {}
Users.init(
	{
		idusers: { type: DataTypes.BIGINT, primaryKey: true },
		username: { type: DataTypes.STRING, allowNull: false, unique: true },
		userpass: { type: DataTypes.STRING, allowNull: false },
		name: { type: DataTypes.STRING, allowNull: false },
		email: { type: DataTypes.STRING, allowNull: false },
		telephone: { type: DataTypes.STRING, allowNull: true },
		address: { type: DataTypes.STRING, allowNull: false },
		isEnabled: { type: DataTypes.STRING, allowNull: false },
		gerarquia: { type: DataTypes.STRING, allowNull: false },
	},
	{ sequelize, modelName: "users" }
)

export { Users }

// freezeTableName: true, timestamps: false
