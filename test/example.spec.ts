import request from 'supertest'
import { afterAll, beforeAll, test } from 'vitest'
import { app } from '../src/app'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('User should be able to create a transaction', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'Transaction 1',
      amount: 100,
      type: 'credit',
    })
    .expect(201)
})
