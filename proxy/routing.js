const express = require('express');
const app = express()

const router = require('./client.js');

app.use('/forward', router)

app.use('/', function(request, response) {
  response.send("Сторінка на порту 3001");
})

module.exports = app;
