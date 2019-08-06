const express = require('express');
const LikeController = require('../controllers/Like');

const routes = express.Router();

routes.post('/:devId', LikeController.store);

module.exports = routes;
