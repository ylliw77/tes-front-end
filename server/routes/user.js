const UserController = require('../controllers/UserController');

const userRoutes = require('express').Router();

userRoutes.post('/register', UserController.registerHandler)
userRoutes.post('/login', UserController.loginHandler)

module.exports = userRoutes