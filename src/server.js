const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const devRoutes = require('./routes/Dev');
const likeRoutes = require('./routes/Like');
const dislikeRoutes = require('./routes/Dislike');

require('dotenv-safe').config();

const { mongodbUrl } = require('./config');

const server = express();

server.use(cors());
server.use(express.json());

server.use('/devs', devRoutes);
server.use('/devs/likes', likeRoutes);
server.use('/devs/dislikes', dislikeRoutes);

mongoose
  .connect(mongodbUrl, { useNewUrlParser: true })
  .then(() => server.listen(3333))
  .catch(err => console.log(err));
