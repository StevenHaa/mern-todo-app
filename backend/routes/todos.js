const express = require('express');
const router = express.Router();

// Load Todo model
const Todo = require('../models/Todo');


// GET ALL TODO'S
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch(err) {
        res.json({ message: err })
    }
})

// GET A SPECIFIC TODO
router.get('/:todoId', async (req, res) => {
    try {
        let todo = await Todo.findById(req.params.todoId);
        res.json(todo);
    } catch(err){
        res.json({ message: err })
    }
});

// ADD A NEW TODO
router.post('/', (async (req, res) => {
    const todo = new Todo();
    todo.id = req.body.id;
    todo.description = req.body.description;
    todo.priority = req.body.priority;
    todo.completed = req.body.completed;
    
    try {
        const newTodo = await todo.save();
        res.json(newTodo);
    } catch(err) {
        res.json({ message: err })
    }
}))

module.exports = router;