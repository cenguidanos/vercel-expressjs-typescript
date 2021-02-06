class HelloService {
	private static instance: HelloService

	private constructor() {}

	public static getInstance() {
		if (!HelloService.instance) {
			HelloService.instance = new HelloService()
		}
		return HelloService.instance
	}

	public hi() {
		return { hello: 'serverless world' }
	}
}

export default HelloService.getInstance()
