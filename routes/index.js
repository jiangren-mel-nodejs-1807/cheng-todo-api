var express = require('express');
var router = express.Router();
var todo = require('./todo');
var task = require('./task');

router.get('/', function(req, res, next) {
  res.send('home');
})

router.use('/todo', task);

module.exports = router;
