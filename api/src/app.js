const express = require('express');
//const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const errors = require('../src/utils/middlewares/errorHandler');
const headers = require('../src/utils/middlewares/setHeaders');
require('./db.js');

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
//server.use(cookieParser());
server.use(morgan('dev'));
server.use(errors);
server.use('/', routes);
server.use(headers);


module.exports = server;
