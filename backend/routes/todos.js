const express = require('express');
const router = express.Router();

// Load Todo model
const Todo = require('../models/Todo');

router.get('/', (req, res) => {
    res.send("hello from get")
})

module.exports = router;