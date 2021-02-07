import express from 'express'

import UsersController from './users.controller'
import UsersMiddleware from './users.middleware'

const router = express.Router()

router.get('/', UsersMiddleware.log, UsersController.users)

export default router
