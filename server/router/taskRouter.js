const express = require('express');
const router = express.Router();
const {addTask, updateTask, deleteTask, getAllTask} = require('../controller/taskController');

// Route to add a new task
router.get('/allTask', getAllTask);

router.post('/addTask', addTask);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);


module.exports = router;