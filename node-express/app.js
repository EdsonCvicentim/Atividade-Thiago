const express = require('express');
const usuarioRoutes = require('./routes/usuario.routes');
const logger = require('./middlewares/logger.middleware');


const app = express();

app.use(logger);

app.use(express.json());

app.use('/usuario', usuarioRoutes);


module.exports = app;