const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController');
const verifyAdminRole = require('../middleware/verifyRoles');
const auth = require('../middleware/auth');



/** PRODUCTOS */
// nuevos productos
router.post('/',
    auth,
    verifyAdminRole(),
    productosController.subirArchivo,
    productosController.nuevoProducto
);

// Muestra todos los productos
router.get('/', 
    auth,
    productosController.mostrarProductos);

// muestra un producto en especifico por su ID
router.get('/:idProducto', 
    auth,
    productosController.mostrarProducto);

// Actualizar Productos
router.put('/:idProducto', 
    auth,
    verifyAdminRole(),
    productosController.subirArchivo,
    productosController.actualizarProducto
);

// Eliminar Productos
router.delete('/:idProducto', 
    auth,
    verifyAdminRole(),
    productosController.eliminarProducto
);

// Busqueda de Productos
router.post('/busqueda/:query',
    auth,
    productosController.buscarProducto);

module.exports = router;
