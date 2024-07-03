const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Todo = require('../models/tdl');
const dotenv = require('dotenv');

dotenv.config();



// Controller untuk menangani request terkait Todo

// Create a new Todo
const createTodo = async (req, res, next) => {
    try {
        const { title } = req.body;
        const result = await Todo.createTodo(title);
        res.status(201).json({ message: 'Todo created successfully', todo: result });
    } catch (error) {
        next(error);
    }
};

// Get all Todos
const getAllTodos = async (req, res, next) => {
    try {
        const todos = await Todo.getAllTodos();
        res.status(200).json(todos);
    } catch (error) {
        next(error);
    }
};

// Get a Todo by ID
const getTodoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await Todo.getTodoById(id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    } catch (error) {
        next(error);
    }
};

// Update a Todo
const updateTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const result = await Todo.updateTodo(id, title);
        if (!result.affectedRows) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo updated successfully' });
    } catch (error) {
        next(error);
    }
};

// Delete a Todo
const deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Todo.deleteTodo(id);
        if (!result.affectedRows) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        next(error);
    }
};

// Get all t_do with at least one list
const getAllDoWithList = async (req, res, next) => {
    try {
        const todos = await Todo.getAllDoWithList();
        res.status(200).json(todos);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
    getAllDoWithList
};
