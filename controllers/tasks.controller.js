import Task from '../models/tasks.model.js'

const getAllTasks = (req,res) => {
    Task.findAll((err, task) => {
        if (err)
        res.send(err)
        console.log('res', task)
        res.send(task)
    })
}

// const createTask = (req,res) => {
//     res.json(req.body)
// }

// const getTask = (req,res) => {
//     res.json({id:req.params.id})
// }

// const updateTask = (req,res) => {
//     res.send('update task')
// }

// const deleteTask = (req,res) => {
//     res.send('delete task')
// }

export default {
    getAllTasks
    // createTask,
    // getTask,
    // updateTask,
    // deleteTask
}