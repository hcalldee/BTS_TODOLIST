const express = require('express');
const router = express.Router();
const listController = require('../controllers/list');
const auth = require('../middleware/auth'); // Import middleware auth

// Define routes for List operations

// Middleware auth akan diterapkan untuk semua rute List di bawah ini
router.use(auth);

// Create a new List
router.post('/', listController.createList);

// Get all Lists
router.get('/', listController.getAllLists);

// Get a List by ID
router.get('/:id', listController.getListById);

// Update a List
router.put('/:id', listController.updateList);

// Update Status of a List
router.patch('/:id/status', listController.updateListStatus);

// Delete a List
router.delete('/:id', listController.deleteList);

module.exports = router;
