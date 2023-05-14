import express from 'express'
const router = express.Router()

import Task from '../controllers/tasks.controller.js'

/**
 * @api {get} /api/v1/tasks Get all tasks
 * @apiVersion 1.0.0
 * @apiName getAll
 * @apiGroup Task
 * @apiPermission authenticated user
 */
router.route('/').get(Task.getAll)
// router.route('/').get(Task.getAll).post(Task.create)
/**
 * @api {post} /api/v1/tasks Create a task
 * @apiVersion 1.0.0
 * @apiName create
 * @apiGroup Task
 * @apiPermission authenticated user
 */
router.post("/", Task.create)
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

export default router