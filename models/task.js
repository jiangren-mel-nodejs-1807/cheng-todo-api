var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
    name: String,
    done: {type: Boolean, default: false}
});

var todoMongooseModel = mongoose.model('Todo', TodoSchema);

module.exports = todoMongooseModel;