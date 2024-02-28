const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Country", {
        id: {
            type: DataTypes.STRING(3),
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        continent: {
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
        population: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
};
