var express = require('express');
var router = express.Router();
var todo = require('./todo');
var task = require('./task');
var item = require('./item');

router.get('/', function(req, res, next) {
  res.send('home');
})

router.use('/todo', todo);
router.use('/task', task);
router.use('/item', item);

module.exports = router;
