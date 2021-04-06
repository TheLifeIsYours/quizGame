
const session = require('supertest-session')
const app = require('../../src/server/app')
let testSession = null

beforeEach(() => {
  testSession = session(app)
})

describe('test /api/new', () => {
  it('should return new gameId', async () => {
    await testSession
      .get('/api/new')
      .then((response) => {
        expect(response.status).toBe(200)
        expect(response.body).toMatchObject({gameId: expect.stringMatching(/gameId#\d*/)})
      })
  })
})