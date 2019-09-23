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


module.exports = router;