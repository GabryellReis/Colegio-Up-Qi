const express = require('express');
const routes = require('../router/routes')
const app = express();

app.use(express.urlencoded({extended: true}))
app.use('/', routes);

module.exports = app;
