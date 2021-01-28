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

/** Metodo para cambiar el nombre de la propiedad _id por uid */
UsuarioSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = mongoose.model('Usuario', UsuarioSchema);