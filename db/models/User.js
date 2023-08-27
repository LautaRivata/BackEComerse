const { DataTypes } = require("sequelize")
import { sequelize } from "../conection"

const User = sequelize.define(
	"users",
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
	{ freezeTableName: true, timestamps: false }
)

export { User }
