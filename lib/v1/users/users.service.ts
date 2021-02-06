import https from 'https'

import { User } from './users.models'

class UsersService {
	private static instance: UsersService

	private constructor() {}

	public static getInstance() {
		if (!UsersService.instance) {
			UsersService.instance = new UsersService()
		}
		return UsersService.instance
	}

	public async fetchUsers(): Promise<Array<User>> {
		const url = 'https://jsonplaceholder.typicode.com/users'
		return new Promise((resolve, reject) => {
			https.get(url, (res) => {
				let data = ''

				res.on('data', (chunk) => (data += chunk))
				res.on('end', () => resolve(JSON.parse(data)))
				res.on('error', (err) => reject(err))
			})
		})
	}
}

export default UsersService.getInstance()
