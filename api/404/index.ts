import type { NowRequest, NowResponse } from '@vercel/node'

import { html404 } from '../../lib/404'

export default async (_req: NowRequest, res: NowResponse) => res.status(404).send(html404)
