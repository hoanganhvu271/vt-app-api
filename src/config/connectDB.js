const { Sequelize } = require("sequelize");
require('dotenv').config()
const sequelize = new Sequelize(process.env.MYSQL_ADDON_DB, process.env.MYSQL_ADDON_USER, process.env.MYSQL_ADDON_PASSWORD, {
    host: process.env.MYSQL_ADDON_HOST,
    port: "3306",
    dialect: "mysql",
});

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

module.exports = { connection, sequelize };