import express from 'express'
const router = express.Router()

import User from '../controllers/users.controller.js'

// router.route('/register').post()
router.route('/login').post(User.login)

export default router