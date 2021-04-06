const session = require('supertest-session')
const app = require('../../src/server/app')
let testSession = null

beforeEach(() => {
  testSession = session(app)
})

describe('test /api/game/:id', () => {
  it('should redirect create gameId, and display game 0', async () => {
    await testSession
      .get('/api/game/0')
      .redirects(2)
      .then((response) => {
        // console.log(response)
        expect(response.body).toMatchObject({
          gameId: expect.stringMatching(/gameId#\d*/),
          id: 0,
          title: "Game of cards",
          containAnswer: false,
          questions: [{
            id: 0,
            question: "How many in a dusine",
            answers: {
              a: "2",
              b: "4",
              c: "6",
              d: "12"
            }
          }]
        })
      })
  })
})