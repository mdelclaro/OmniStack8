const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv-safe').config();

const { mongodbUrl } = require('./config');

const server = express();

mongoose.connect(mongodbUrl, { useNewUrlParser: true });

server.use(express.json());
server.use(routes);

server.listen(3333);
