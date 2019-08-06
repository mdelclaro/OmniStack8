const express = require('express');
const DislikeController = require('../controllers/Dislike');

const routes = express.Router();

routes.post('/:devId', DislikeController.store);

module.exports = routes;
