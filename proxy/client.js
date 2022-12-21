const axios = require('axios').default;
const service = require('./service.js');
const express = require('express');
const router = express.Router();

router.use('/', function (request, response) {


  axios.get(service.get('remote_url'))
  .then((res) => {

    response.send(res.data);
  })
  .catch((error) => {

    console.log(error);
  })
  .finally(() => {});
})

module.exports = router;


