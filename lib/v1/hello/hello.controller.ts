import type { Request, Response } from 'express'

import HelloService from './hello.service'

class HelloController {
	private static instance: HelloController

	private constructor() {}

	public static getInstance() {
		if (!HelloController.instance) {
			HelloController.instance = new HelloController()
		}
		return HelloController.instance
	}

	public async hello(_req: Request, res: Response) {
		try {
			const data = HelloService.hi()
			return res.status(200).json(data)
		} catch (error) {
			return res.status(400).send(`Error on route: ${error.message}`)
		}
	}
}

export default HelloController.getInstance()
