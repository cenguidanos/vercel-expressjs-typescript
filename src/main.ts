import express from 'express'
import helmet from 'helmet'

import UsersController from './controllers/user.controller'
import WelcomeController from './controllers/welcome.controller'

// Initialize app
const app = express()

// Use middlewares
app.use(helmet())

// Use controllers
app.use('/', WelcomeController)
app.use('/users', UsersController)

// Export to Vercel Serverless
export default app
