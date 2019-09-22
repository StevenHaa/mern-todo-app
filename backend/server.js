const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// Import routes
const todos = require('./routes/todos')

// Route Middleware
app.use('/todos', todos);

// connect backend to database
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useUnifiedTopology: true , useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

connection.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
