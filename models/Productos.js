const  DataTypes  = require('sequelize');
const db  = require('../config/db');
const Empresas  = require('./Empresas');

const Productos = db.define('productos', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.DECIMAL ,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER ,
        allowNull: false
    },
    imagen: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

})
Productos.empresa = Productos.belongsTo(Empresas);


module.exports = Productos;