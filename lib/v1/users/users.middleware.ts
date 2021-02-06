import type { NextFunction, Request, Response } from 'express'

class UsersMiddleware {
	private static instance: UsersMiddleware

	private constructor() {}

	public static getInstance() {
		if (!UsersMiddleware.instance) {
			UsersMiddleware.instance = new UsersMiddleware()
		}

		return UsersMiddleware.instance
	}

	public log(req: Request, _res: Response, next: NextFunction) {
		console.log('Request Type from Users:', req.method)
		next()
	}
}

export default UsersMiddleware.getInstance()
