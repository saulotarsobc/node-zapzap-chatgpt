const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite",
});

const Mensagens = sequelize.define("Mensagens", {
    chatID: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mensagem: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Mensagens.sync({ alter: true });

module.exports = { Mensagens };