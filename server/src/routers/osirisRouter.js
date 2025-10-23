const express = require('express');
const router = express.Router();
const testData = require('../models/osirisModel.js');

// GET all Tests
router.get('/', (req, res) => {
    try {
        const allTests = testData.findAll();
        res.status(200).json(allTests);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving Tests', error: err });
    }
});

// GET an Test by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    try {
        const test = testData.findById(id);
        if (test) {
            res.status(200).json(test);
        } else {
            res.status(404).json({ message: `Test with id ${id} not found` });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving Test', error: err });
    }
});

// POST a new Test
router.post('/', (req, res) => {
    try {
        const newTest = testData.add(req.body);
        res.status(201).json(newTest);
    } catch (err) {
        res.status(500).json({ message: 'Error adding Test', error: err });
    }
});

// PUT (update) an Test by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    try {
        const updatedTest = testData.update(id, changes);
        if (updatedTest) {
            res.status(200).json(updatedTest);
        } else {
            res.status(404).json({ message: `Test with id ${id} not found` });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error updating Test', error: err });
    }
});

// DELETE an Test by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    try {
        const deletedTest = testData.remove(id);
        if (deletedTest) {
            res.status(200).json({ message: `Test with id ${id} deleted` });
        } else {
            res.status(404).json({ message: `Test with id ${id} not found` });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error deleting Test', error: err });
    }
});

module.exports = router;