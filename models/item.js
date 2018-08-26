var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('data/sqlite.db')

var ItemModel = {
    getAllStmt: db.prepare('select * from Todo'),
    create: function(name) {
        db.run('insert into Todo values (\'' + name + '\',' + 0 + ')');
    },
    getAll: function(res) {
        var todoList = [];
        db.all('select * from Todo', function(err, rows) {
            res.json(rows);
        });
    },
    parts: {
        create: function(res, todoId, name) {
            db.run('insert into Part (name, description, todoId) values ("' + name + '", "desc", ' + todoId + ')', function(result, err) {
                res.sendStatus(200);
            });
        },
        getAll: function(res) {
            db.all('select Part.id, Part.name, Part.description from Part inner join Todo on Part.todoId = Todo.id where Todo.id = ' + 1, function(err, rows) {
                res.json(rows);
            })
        }
    }
}

module.exports = ItemModel;