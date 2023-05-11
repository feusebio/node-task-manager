import express from 'express'
const router = express.Router()

// const { 
//     getAllTasks,
//     createTask,
//     getTask,
//     updateTask,
//     deleteTask 
// } = require('../controllers/tasks.controller')

import Task from '../controllers/tasks.controller.js'

router.get("/", Task.getAllTasks)
// router.get('/', (req, res) => {
//     res.send('Home page of books route');
//   });
// router.route('/').get(getAllTasks)
// router.route('/').get(getAllTasks).post(createTask)
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

export default router