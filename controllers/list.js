const List = require('../models/list');

// Controller untuk menangani request terkait List

// Create a new List
const createList = async (req, res, next) => {
    try {
        const { list, id_do, status } = req.body;
        const result = await List.createList({ list, id_do, status });
        res.status(201).json({ message: 'List created successfully', list: result });
    } catch (error) {
        next(error);
    }
};

// Get all Lists
const getAllLists = async (req, res, next) => {
    try {
        const lists = await List.getAllLists();
        res.status(200).json(lists);
    } catch (error) {
        next(error);
    }
};

// Get a List by ID
const getListById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const list = await List.getListById(id);
        if (!list) {
            return res.status(404).json({ message: 'List not found' });
        }
        res.status(200).json(list);
    } catch (error) {
        next(error);
    }
};

// Update a List
const updateList = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { list, id_do, status } = req.body;
        const result = await List.updateList(id, { list, id_do, status });
        if (!result.affectedRows) {
            return res.status(404).json({ message: 'List not found' });
        }
        res.status(200).json({ message: 'List updated successfully' });
    } catch (error) {
        next(error);
    }
};

// Update Status of a List
const updateListStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const list = await List.getListById(id);
        if (!list) {
            return res.status(404).json({ message: 'List not found' });
        }

        // Toggle the status
        const newStatus = req.body.status; // Negate the current status
        console.log(newStatus);
        const result = await List.updateListStatus(id,newStatus);
        if (!result.affectedRows) {
            return res.status(404).json({ message: 'List not found' });
        }

        res.status(200).json({ message: 'List status updated successfully' });
    } catch (error) {
        next(error);
    }
};

// Delete a List
const deleteList = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await List.deleteList(id);
        if (!result.affectedRows) {
            return res.status(404).json({ message: 'List not found' });
        }
        res.status(200).json({ message: 'List deleted successfully' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createList,
    getAllLists,
    getListById,
    updateList,
    updateListStatus,
    deleteList
};
