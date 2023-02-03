const express = require('express');
const { allUsers } = require('../controllers/usersControllers');

const routes = express.Router();

routes.get('/', allUsers)

module.exports = routes;