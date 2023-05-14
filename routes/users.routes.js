import express from 'express'
const router = express.Router()

import User from '../controllers/users.controller.js'

// router.route('/register').post()
/**
 * @api {post} /api/v1/users Login
 * @apiVersion 1.0.0
 * @apiName login
 * @apiGroup User
 * @apiPermission not authenticated
 */
router.route('/login').post(User.login)

export default router