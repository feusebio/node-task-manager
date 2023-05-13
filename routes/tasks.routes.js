import express from 'express'
const router = express.Router()

import Task from '../controllers/tasks.controller.js'

router.route('/').get(Task.getAll)
// router.route('/').get(Task.getAll).post(Task.create)
router.post("/", Task.create)
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

export default router