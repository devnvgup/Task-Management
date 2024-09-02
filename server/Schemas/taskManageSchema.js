const mongoose = require('mongoose');


const TaskManageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
    },
    status: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at'   // and `updated_at` to store the last updated date
    }
});

const TaskModel = mongoose.model('Task', TaskManageSchema)
module.exports = TaskModel