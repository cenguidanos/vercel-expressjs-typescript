import express from 'express'
import type { Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'

import HelloRouter from '../../lib/v1/hello/hello.router'
import UsersRouter from '../../lib/v1/users/users.router'

// App entry point
const app = express()
const APP_PREFIX = '/v1'

// Use middlewares
app.use(helmet())
app.use(cors())

// Use routers
app.use(APP_PREFIX + '/', HelloRouter)
app.use(APP_PREFIX + '/users', UsersRouter)

app.get('*', (_req: Request, res: Response) => res.redirect('/'))

// Export to Vercel Serverless
export default app
