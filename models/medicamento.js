const {sequelize, DataTypes} = require("../database");


const Medicamento = sequelize.define('Medicamento', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(40),
        allowNull: false,
        comment: "Nome do medicamento",
        unique: true
    },
    descricao: {
        type: DataTypes.STRING(200),
        allowNull: true
    }
});

module.exports = Medicamento;