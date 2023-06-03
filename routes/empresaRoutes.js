const express = require('express');
const router = express.Router();

const empresaController = require('../controllers/empresaController');
const verifyAdminRole = require('../middleware/verifyRoles');
const auth = require('../middleware/auth');

// Agrega nuevas empresas via POST
router.post('/',
    auth,
    verifyAdminRole(),
    empresaController.nuevaEmpresa 
);

// Obtener todos los empresas
router.get('/', 
    auth,
    empresaController.mostrarEmpresas
);

// Muestra un empresa en especifico (ID)
router.get('/:idEmpresa', 
    auth,
    empresaController.mostrarEmpresa );

// Actualizar empresa
router.put('/:idEmpresa',
    auth,
    verifyAdminRole(),
    empresaController.actualizarEmpresa);

// Eliminar empresa
router.delete('/:idEmpresa', 
    auth,
    verifyAdminRole(),
    empresaController.eliminarEmpresa);

module.exports = router;