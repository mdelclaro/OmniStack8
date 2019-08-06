const express = require('express');
const DevController = require('../controllers/Dev');

const routes = express.Router();

routes.get('/', DevController.index);
routes.post('/', DevController.store);

module.exports = routes;
