const Usuario = require('../models/usuario');

const getUsuarios = (req, res) => {

  res.status(200).json({
    ok: true,
    msg: 'get usuarios',
    usuarios: []
  });
}

const crearUsuario = async (req, res) => {

 const { email, password, nombre } = req.body;

 const usuario = new Usuario(req.body);

 await usuario.save();

 console.log(email);
  res.status(200).json({
    ok: true,
    usuario
  });
}

module.exports = {
  getUsuarios,
  crearUsuario,
}