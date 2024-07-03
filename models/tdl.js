const db = require('../config/db');

const createTodo = async (title) => {
    const [result] = await db.query('INSERT INTO t_do (title) VALUES (?)', [title]);
    return result;
};

const getAllTodos = async () => {
    const [rows] = await db.query('SELECT * FROM t_do');
    return rows;
};

const getTodoById = async (id) => {
    const [rows] = await db.query('SELECT * FROM t_do WHERE id = ?', [id]);
    return rows[0];
};

const updateTodo = async (id, title) => {
    const [result] = await db.query('UPDATE t_do SET title = ? WHERE id = ?', [title, id]);
    return result;
};

const deleteTodo = async (id) => {
    const [result] = await db.query('DELETE FROM t_do WHERE id = ?', [id]);
    return result;
};

// Mengambil semua t_do yang memiliki list menggunakan JOIN
const getAllDoWithList = async () => {
    const query = `
        SELECT *
        FROM t_do
        INNER JOIN t_list ON t_do.id = t_list.id_do
    `;
    const [rows] = await db.query(query);
    return rows;
};

// Mengambil semua t_do yang memiliki child list dengan filter parent t_do.id
const getAllDoWithListId = async (parentId) => {
    const query = `
        SELECT t_do.*, t_list.id AS list_id, t_list.list, t_list.status
        FROM t_do
        INNER JOIN t_list ON t_do.id = t_list.id_do
        WHERE t_do.id = ?
    `;
    const [rows] = await db.query(query, [parentId]);
    return rows;
};

module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
    getAllDoWithList,
    getAllDoWithListId
};
