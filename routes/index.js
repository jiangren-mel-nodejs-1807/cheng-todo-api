var express = require('express');
var router = express.Router();
var todo = require('./todo');

router.get('/', function(req, res, next) {
  res.send('home');
})

router.use('/todo', todo);

module.exports = router;
