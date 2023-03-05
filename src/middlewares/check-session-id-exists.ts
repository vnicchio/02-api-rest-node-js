import { FastifyReply, FastifyRequest } from 'fastify'

export function checkSessionIdExists(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return response.status(401).send({
      error: 'Unauthorized',
      message: 'You must provide a sessionId cookie',
    })
  }
}
