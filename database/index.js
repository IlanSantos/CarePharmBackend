const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    dialect: "postgres"
});

module.exports = {sequelize, DataTypes};