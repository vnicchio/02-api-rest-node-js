import request from 'supertest'
import { afterAll, beforeAll, describe, it } from 'vitest'
import { app } from '../src/app'

describe('Transactions Routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('User should be able to create a transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'Transaction 1',
        amount: 100,
        type: 'credit',
      })
      .expect(201)
  })
})
