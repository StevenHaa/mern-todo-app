const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    description: {
        type: String
    },
    priority: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

modefule.exports = mongoose.model('Todo', Todo);