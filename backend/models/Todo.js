const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    id: {
        type: Number
    },
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

module.exports = Todo = mongoose.model('todo', TodoSchema);