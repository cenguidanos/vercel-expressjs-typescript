import express from 'express'
import type { Request, Response } from 'express'

import { hi } from '../services/welcome.service'

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
	const welcome = hi()
	return res.status(200).json(welcome)
})

export default router
