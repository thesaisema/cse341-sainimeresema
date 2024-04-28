const { awesomeFunction } = require('../controllers');

const myController = require('../controllers')

const routes = require('express').Router();

routes.get('/', myController.awesomeFunction)
routes.get('/awesome', myController.returnAnotherPerson)

module.exports = routes;