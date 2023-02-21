import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', () => {
    //   const transaction = knex('transactions')
    //     .insert({
    //       id: crypto.randomUUID(),
    //       title: 'Transação 1',
    //       amount: 1000,
    //     })
    //     .returning('*')

    const transactions = knex('transactions')
      .select('*')
      .where({ amount: 1000 })

    return transactions
  })
}
