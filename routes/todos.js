const express = require('express');
const router = express.Router();
const todoController = require('../controllers/tdl');
const auth = require('../middleware/auth'); // Import middleware auth

// Define routes for Todo operations

// Middleware auth akan diterapkan untuk semua rute Todo di bawah ini
router.use(auth);

// Create a new Todo
router.post('/', todoController.createTodo);

router.get('/allList', todoController.getAllDoWithList);

// Get all Todos
router.get('/', todoController.getAllTodos);

// Get a Todo by ID
router.get('/:id', todoController.getTodoById);

// Update a Todo
router.put('/:id', todoController.updateTodo);

// Delete a Todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
