/**
 * Ruta base: /api/usuarios
 */

const { Router } = require('express');
const { getUsuarios, crearUsuario } = require('../controllers/usuarios');

const router = Router(); 

//Rutas
router.get('/', getUsuarios );
router.post('/', crearUsuario );


module.exports = router;