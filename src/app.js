const express = require('express');
const connectiondb = require('./db');
const app = express();

require('dotenv').config();

//Conexion a la base de datos
connectiondb();

//Configuraciones

app.set("name", "Api-Hotelia");
app.set("port", procces.env.PORT || 3000);
app.ser("host", procces.env.HOST || 'localhost');