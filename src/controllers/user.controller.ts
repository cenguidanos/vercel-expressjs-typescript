import express from 'express'
import type { Request, Response } from 'express'

import middleware from '../middleware'

import { User } from '../models/user.model'
import { fetchUsers } from '../services/user.service'

const router = express.Router()

router.get('/', middleware.Cors(['GET']), async (_req: Request, res: Response) => {
	let users: Array<User>

	try {
		users = await fetchUsers()
	} catch (error) {
		return res.status(400).send(`Error on route: ${error.message}`)
	}

	return res.status(200).json({ users })
})

export default router
