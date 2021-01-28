/**
 * Ruta base: /api/usuarios
 */

const { Router } = require('express');
const { getUsuarios, crearUsuario } = require('../controllers/usuarios');
const { check } = require('express-validator');

const router = Router(); 

//Rutas
router.get('/', getUsuarios );
router.post('/', 
    [
      check('nombre', 'El nombre es obligatorio').not().isEmpty(),
      check('password', 'El password es obligatorio').not().isEmpty(),
      check('email', 'El email es obligatorio').isEmail()
    ],  
    crearUsuario );


module.exports = router;