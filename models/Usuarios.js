const  DataTypes  = require('sequelize');
const db  = require('../config/db');

const Usuarios = db.define('usuarios', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.ENUM("admin", "external"),
        defaultValue: "external",
    },
})


module.exports = Usuarios