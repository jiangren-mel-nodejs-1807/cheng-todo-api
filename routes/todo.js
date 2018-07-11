var router = require('express').Router();
var todoModel = require('../models/todo');


router.post('/', function(req, res, next) {
    res.send(todoModel.create(req.body.name));
})

router.get('/', function(req, res, next) {
    res.send(todoModel.getAll());
})

router.get('/:id', function(req, res, next) {
    var todoFound = todoModel.getByName(req.params.id);
    if (todoFound.length === 0) {
        res.sendStatus(404)
    } else {
        res.send(todoFound[0]);
    }
})

router.patch('/:id', function(req, res, next) {
    var patchedTodo = todoModel.patch(req.params.id, req.body);
    if (patchedTodo) {
        return res.send(patchedTodo);
    } else {
        return res.sendStatus(404);
    }
})

router.delete('/:id', function(req, res, next) {
    res.send(todoModel.delete(req.params.id));
})

module.exports = router