const QuizGame = require('../../src/server/api/QuizGame')
const Game = require('../../src/server/api/QuizGame/models/Game/Game')
const Question = require('../../src/server/api/QuizGame/models/Question/Question')

describe('test QuizGame', () => {
  it('should return list of Quizes with id and title', () => {
    expect(QuizGame.listGames()).toEqual([{
      id: 0,
      title: "Game of cards"
    }])
  })

  //TODO: write tests for QuizGame functions

  describe('test Game object', () => {
    
    let gameData = {
      id: 0,
      title: "Game of cards",
      questions: [{
        id: 0,
        question: "How many in a dusine",
        answers: {
          a: "2",
          b: "4",
          c: "6",
          d: "12"
        },
        correct: "d"
      }]
    }

    it('should create a Game object without answers', () => {
      let gameObject = new Game(gameData, false)

      expect(gameObject.containAnswer).toBe(false)
      expect(gameObject.questions[0].correct).toBe(undefined)
    })

    it('should create a Game object with answers', () => {
      let gameObject = new Game(gameData, true)

      expect(gameObject.containAnswer).toBe(true)
      expect(gameObject.questions[0].correct).toBe("d")
    })
  
    it('should return specific Quize 0 without answers', () => {
      let gameObject = new Game(gameData, false)
      expect(QuizGame.getGame(0)).toMatchObject(gameObject)
      expect(QuizGame.getGame(0, false)).toMatchObject(gameObject)
    })
    
    it('should return specific Quize 0 with answers', () => {
      let gameObject = new Game(gameData, true)
      expect(QuizGame.getGame(0, true)).toMatchObject(gameObject)
    })
  })

  describe('test Question object', () => {
    
    let questionData = {
      id: 0,
      question: "How many in a dusine",
      answers: {
        a: "2",
        b: "4",
        c: "6",
        d: "12"
      },
      correct: "d"
    }

    let questionObject = new Question(questionData)

    it('should get Question object question', () => {
      expect(questionObject.getQuestion()).toBe(questionData.question)
    })
    it('should get Question object question', () => {
      expect(questionObject.getAnswers()).toBe(questionData.answers)
    })
    it('should get Question object question', () => {
      expect(questionObject.getCorrect()).toBe("d")
    })
  })
})