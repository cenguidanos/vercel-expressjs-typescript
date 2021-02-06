import express from 'express'
import helmet from 'helmet'

import UsersController from '../../lib/v1/controllers/user.controller'
import WelcomeController from '../../lib/v1/controllers/welcome.controller'

// App entry point
const app = express()
const APP_PREFIX = '/api/v1'

// Use middlewares
app.use(helmet())

// Use controllers
app.use(APP_PREFIX + '/', WelcomeController)
app.use(APP_PREFIX + '/users', UsersController)

// Export to Vercel Serverless
export default app
