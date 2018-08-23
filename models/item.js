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
    }
}

module.exports = ItemModel;