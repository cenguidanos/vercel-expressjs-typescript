import express from 'express'
import type { Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'

import HelloRouter from './_lib/hello/hello.router'
import UsersRouter from './_lib/users/users.router'

// App entry point
const app = express()
const APP_PREFIX = '/v1'

// Use middlewares
app.use(helmet())
app.use(cors())

// Use routers
app.use(APP_PREFIX + '/', HelloRouter)
app.use(APP_PREFIX + '/users', UsersRouter)

app.get('*', (_req: Request, res: Response) => res.status(404).redirect('/404'))

// Export to Vercel Serverless
export default app
