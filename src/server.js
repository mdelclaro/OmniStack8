const express = require('express');
const mongoose = require('mongoose');

const devRoutes = require('./routes/Dev');
const likeRoutes = require('./routes/Like');
require('dotenv-safe').config();

const { mongodbUrl } = require('./config');

const server = express();

mongoose.connect(mongodbUrl, { useNewUrlParser: true });

server.use(express.json());

server.use('/devs', devRoutes);
server.use('/devs/likes', likeRoutes);

server.listen(3333);
