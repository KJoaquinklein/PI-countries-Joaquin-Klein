const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Country", {
        id: {
            type: DataTypes.STRING(3),
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        continente: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        capital: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        subregion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        area: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        poblacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
};
