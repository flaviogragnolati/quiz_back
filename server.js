const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index');
const passport = require('passport');

require('./config/passport')(passport); //pasamos la configuracion al obj global de passport

const server = express();

/**
 * SETUP GENERAL
 */
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev')); //para logear a la terminal
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); //Linea agregada para probar por que no axios.delete no recibe ninguna respuesta
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
server.use(cors({ origin: true, credentials: true }));

//server.use(express.session({ secret: 'barto', maxAge: null }))
server.use(passport.initialize()); //*Inicializamos el passport
//server.use(passport.session()); // Sesión persistente

server.use('/', routes);
// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
