import { ServerRequest } from 'https://deno.land/std@0.79.0/http/server.ts'

export default async (req: ServerRequest) => {
	req.respond({
		body: JSON.stringify({
			hello: `serverless world...with Deno ${Deno.version.deno}!`
		})
	})
}
