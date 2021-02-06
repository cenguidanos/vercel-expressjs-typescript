import https from 'https'

import { User } from '../models/user.model'

export async function fetchUsers(): Promise<Array<User>> {
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
