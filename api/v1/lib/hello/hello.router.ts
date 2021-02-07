import express from 'express'

import HelloController from './hello.controller'
import HelloMiddleware from './hello.middleware'

const router = express.Router()

router.get('/', HelloMiddleware.log, HelloController.hello)

export default router
