const { Sequelize } = require("sequelize")

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("proyectofinal", "Tupak", "Socrates12", {
	host: "localhost",
	dialect: "mysql",
})

export { sequelize }
