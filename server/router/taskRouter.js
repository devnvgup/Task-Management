const express = require('express');
const router = express.Router();
const {addTask, updateTask, deleteTask, getAllTask, getAllTaskImportant, getAllTaskCompleted} = require('../controller/taskController');

// Route to add a new task
router.get('/allTask', getAllTask);
router.get('/allTaskImportant', getAllTaskImportant);
router.get('/allTaskCompleted', getAllTaskCompleted);

router.post('/addTask', addTask);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);

module.exports = router;