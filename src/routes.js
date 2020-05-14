const { Router } = require('express');

const ApiController = require('./controllers/ApiController');
const AuthMiddleware = require('./middlewares/AuthMiddleware');

const routes = Router();

routes.get('/habitantes', ApiController.index);

module.exports = routes;