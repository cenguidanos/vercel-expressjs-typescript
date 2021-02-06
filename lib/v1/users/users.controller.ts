import type { Request, Response } from 'express'

import UsersService from './users.service'

class UsersController {
	private static instance: UsersController

	private constructor() {}

	public static getInstance() {
		if (!UsersController.instance) {
			UsersController.instance = new UsersController()
		}

		return UsersController.instance
	}

	public async users(_req: Request, res: Response) {
		try {
			const users = await UsersService.fetchUsers()
			return res.status(200).json({ users })
		} catch (error) {
			return res.status(400).send(`Error on route: ${error.message}`)
		}
	}
}

export default UsersController.getInstance()
