import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', () => {
  //   const transaction = knex('transactions')
  //     .insert({
  //       id: crypto.randomUUID(),
  //       title: 'Transação 1',
  //       amount: 1000,
  //     })
  //     .returning('*')

  const transactions = knex('transactions').select('*').where({ amount: 1000 })

  return transactions
})

app.listen({ port: env.PORT }).then(() => {
  console.log(`HTTP server listening on port ${env.PORT}`)
})
