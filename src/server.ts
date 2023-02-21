import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', () => {
  const tables = knex('sqlite_schema').select('*')
  return tables
})

app.listen({ port: env.PORT }).then(() => {
  console.log(`HTTP server listening on port ${env.PORT}`)
})
