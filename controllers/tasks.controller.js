import Task from '../models/tasks.model.js'

const getAll = (req,res) => {
    Task.findAll((err, task) => {
        if (err)
        res.send(err)
        console.log('res', task)
        res.send(task)
    })
}

const create = (req,res) => {
    const new_task = new Task(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    } else {
        Task.create(new_task, (err, task) => {
            if (err)
                res.send(err);
                res.json({ error:false, message:"Task added successfully!", task });
        })
    }
}

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
    getAll,
    create
    // getTask,
    // updateTask,
    // deleteTask
}