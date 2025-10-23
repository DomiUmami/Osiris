const db = require('../data/mockData'); // this will be an array

function findAll() {
    return db; // returns the whole array
}

function findById(id) {
    return db.find(testData => testData.id === Number(id)) || null;
}

function add(testData) {
    const newTest = {
        id: db.length ? db[db.length - 1].id + 1 : 1,
        ...testData
    };
    db.push(newTest);
    return newTest;
}

function update(id, changes) {
    const index = db.findIndex(testData => testData.id === Number(id));
    if (index === -1) return null;

    db[index] = { ...db[index], ...changes };
    return db[index];
}

function remove(id) {
    const index = db.findIndex(testData => testData.id === Number(id));
    if (index === -1) return null;

    const removed = db.splice(index, 1)[0];
    return removed;
}

module.exports = {
    findAll,
    findById,
    add,
    update,
    remove
};