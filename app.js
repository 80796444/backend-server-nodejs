// Requires
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


//Inicializar variables
const app = express();

// SET Cors
app.use(cors());
app.use(express.json());

// Importar rutas
// conexion a base de datos mongo
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m','online');
});

// Rutas
app.use('/api/usuarios', require('./routes/usuario'));
app.use('/', require('./routes/app'));


// Escuchar peticione
app.listen(3000, () => {
    console.log('express server puerto 3000: \x1b[32m%s\x1b[0m','online');
});