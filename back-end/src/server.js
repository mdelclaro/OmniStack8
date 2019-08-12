const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const devRoutes = require('./routes/Dev');
const likeRoutes = require('./routes/Like');
const dislikeRoutes = require('./routes/Dislike');

require('dotenv-safe').config();

const { mongodbUrl } = require('./config');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
  const { user } = socket.handshake.query;

  connectedUsers[user] = socket.id;
});

app.use((req, _, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use(express.json());

app.use('/devs', devRoutes);
app.use('/devs/likes', likeRoutes);
app.use('/devs/dislikes', dislikeRoutes);

mongoose
  .connect(mongodbUrl, { useNewUrlParser: true })
  .then(() => server.listen(3333))
  .catch(err => console.log(err));
