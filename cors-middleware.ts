import corsWrapper from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'

type MiddlewareFunc = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: (err?: Error) => void
) => void

const CORS_OPTIONS = {
  methods: ['GET', 'OPTIONS'],
}

function promisifyMiddleware(middleware: MiddlewareFunc) {
  return (req: any, res: any) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: Error | unknown) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}

const cors = promisifyMiddleware(corsWrapper(CORS_OPTIONS))

export default cors
