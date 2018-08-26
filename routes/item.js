var router = require('express').Router();
var itemModel = require('../models/item');


router.post('/', function(req, res, next) {
    res.send(itemModel.create(req.body.name));
})

router.get('/', function(req, res, next) {
    itemModel.getAll(res);
})

router.post('/:id/part', function(req, res, next) {
    itemModel.parts.create(res, req.params.id, req.body.name);
})

router.get('/:id/part', function(req, res, next) {
    itemModel.parts.getAll(res);
})

module.exports = router;