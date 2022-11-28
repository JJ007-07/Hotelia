const express = require('express');
const connectiondb = require('./db');
const rutasHab = require('./routes/habitacion.routes');
const rutasUser = require('./routes/user.routes');
const rutasReserva = require('./routes/reserva.routes');
const app = express();

require('dotenv').config();

//Conexion a la base de datos
connectiondb();

//Configuraciones

app.set("name", "Api-Hotelia");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'localhost');

//Midleware
app.use(express.json());

//Llamado de rutas
app.use(express.static('public'));
app.use('/public', express.static('public/upload'));

app.use('/habitaciones', rutasHab);
app.use('/user', rutasUser);
app.use('/reserva', rutasReserva);

module.exports = app;