import cors from 'cors'

type Methods = 'GET' | 'POST' | 'OPTIONS' | 'PUT' | 'DELETE'

const middleware = {
	Cors: (methods: Array<Methods>) => cors({ methods })
}

export default middleware
