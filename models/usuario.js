var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({

    nombre: { type: String, required: [true, 'El campo nombre es requerido']},
    email: { type: String, unique: true, required: [true, 'El campo email es requerido']},
    password: { type: String, required: [true, 'El password es requerido']},
    img: { type: String, required: false},
    role: { type: String, required: true, default: 'USER_ROLE'},
    google: { type: Boolean, default: false }
});


module.exports = mongoose.model('Usuario', UsuarioSchema);