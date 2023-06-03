const express = require('express');

// const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const empresaRouter = require('./routes/empresaRoutes');
const usuarioRouter = require('./routes/usuarioRoutes');
const productoRouter = require('./routes/productoRoutes');
const emailRouter = require('./routes/emailRoutes');

const db = require('./config/db.js');

// Cors permite que un cliente se conecta a otro servidor para el intercambio de recursos

const cors = require('cors');

// conectar mongo
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/restapis', {
//   useNewUrlParser: true
// });

// Conexión a la base de datos
try {
    db.authenticate();
    db.sync()
    console.log('Conexión Correcta a la Base de datos')
} catch (error) {
    console.log(error)
}


// crear el servidor
const app = express();

// habilitar bodyparser

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
//app.use(express.json());
//app.use(express.bodyParser({limit: '50mb'}));

// Habilitar cors
app.use(cors());

// Rutas de la app


app.use('/empresas', empresaRouter);
app.use('/', usuarioRouter);
app.use('/productos', productoRouter);
app.use('/email', emailRouter);
app.get('/', function(req, res) {
    res.send('Hello from root route.')
  });

// carpeta publica
app.use(express.static('uploads'));

// puerto
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
});