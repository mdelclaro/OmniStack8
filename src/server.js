const express = require('express');
const mongoose = require('mongoose');
const devRoutes = require('./routes/Dev');
require('dotenv-safe').config();

const { mongodbUrl } = require('./config');

const server = express();

mongoose.connect(mongodbUrl, { useNewUrlParser: true });

server.use(express.json());

server.use('/devs', devRoutes);

server.listen(3333);
