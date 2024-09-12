const TaskModel = require('../Schemas/taskManageSchema');



const getAllTask = async (req, res) => {
    console.log(req.params.id);
    try {
        const tasks = await TaskModel.find()
        res.status(200).json({tasks});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
}

const getAllTaskImportant = async (req, res) => {
    try {
        const tasks = await TaskModel.find({status:"Incomplete"})
        res.status(200).json({tasks});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
}

const getAllTaskCompleted = async (req, res) => {
    try {
        const tasks = await TaskModel.find({status:"Completed"})
        res.status(200).json({tasks});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
}

const addTask = async (req, res) => {
    const arg = req.body
    try {
        const newTask = new TaskModel({ ...arg })
        await newTask.save()
        res.status(200).json(newTask)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
}

const updateTask = async (req, res) => {
    const arg = req.body
    try {
        const foundTask = await TaskModel.findByIdAndUpdate(req.params.id, { ...arg }, { new: true })
        res.status(200).json(foundTask)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
}

const deleteTask = async (req, res) => {
    try {
        const foundTask = await TaskModel.findByIdAndDelete(req.params.id)
        if (!foundTask) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
}

module.exports = {
    addTask,
    updateTask,
    deleteTask,
    getAllTask,
    getAllTaskImportant,
    getAllTaskCompleted
}