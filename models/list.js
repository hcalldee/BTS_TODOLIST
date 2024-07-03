const db = require('../config/db');

const createList = async (listData) => {
    const { list, id_do, status } = listData;
    const [result] = await db.query('INSERT INTO t_list (list, id_do, status) VALUES (?, ?, ?)', [list, id_do, status]);
    return result;
};

const getAllLists = async () => {
    const [rows] = await db.query('SELECT * FROM t_list');
    return rows;
};

const getListById = async (id) => {
    const [rows] = await db.query('SELECT * FROM t_list WHERE id = ?', [id]);
    return rows[0];
};

const updateList = async (id, listData) => {
    const { list, id_do, status } = listData;
    const [result] = await db.query('UPDATE t_list SET list = ?, id_do = ?, status = ? WHERE id = ?', [list, id_do, status, id]);
    return result;
};

const deleteList = async (id) => {
    const [result] = await db.query('DELETE FROM t_list WHERE id = ?', [id]);
    return result;
};

module.exports = {
    createList,
    getAllLists,
    getListById,
    updateList,
    deleteList
};
