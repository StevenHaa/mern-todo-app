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

// DELETE A TODO
router.delete('/:todoId', async(req, res) => {
    try {
        const removeTodo = await Todo.remove({ _id: req.params.todoId });
        res.json(removeTodo)
    } catch(err) {
        res.json({ message: err })
    }
})

// UPDATE A TODO
router.patch('/:todoId', async(req, res) => {
    try {
        const updatedTodo = await Todo.updateOne({ _id: req.params.todoId }, { 
                $set: {
                    description: req.body.description,
                    priority: req.body.priority
                }
            });
        res.json(updatedTodo)
    } catch(err) {
        res.json({ message: err })
    }
})

module.exports = router;