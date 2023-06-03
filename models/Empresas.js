const  DataTypes  = require('sequelize');
const db  = require('../config/db');

const Empresas = db.define('empresas', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nit: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
module.exports = Empresas;