
var TodoModel = {
    todoList: [],
    create: function(name) {
        var newRecord = {name: name, done: false};
        this.todoList.push(newRecord);
        return newRecord;
    },
    getByName: function(name) {
        return this.todoList.filter(function(value) {
            console.log(this.todoList);
            return name === value.name; 
        });
    },
    getAll: function() {
        return this.todoList;
    },
    patch: function(name, body) {
        var aTodo = this.todoList.find((value) => {
            console.log(this);
            return name === value.name;
        });
        if (aTodo) {
            Object.assign(aTodo, body);
        }
        return aTodo;
    },
    delete: function(name) {
        var foundTodoIndex = this.todoList.findIndex(function(value) {
            return name === value.name;
        })
        return this.todoList.splice(foundTodoIndex, 1);
    }
}

module.exports = TodoModel;