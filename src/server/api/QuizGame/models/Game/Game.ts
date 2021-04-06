import Alternative from '../Alternative/Alternative'
import Question from '../Question/Question'

export default class Game {
  id: String
  title: String
  containAnswer: Boolean = false
  questions: Question[]
  currentQuestion: Question
  answeredQuestions: Question[]
  gameState: GameState = GameState.Ongoing
  score: number

  constructor(id: string, title: string, questions: Question[]) {
    this.id = id
    this.title = title
    this.questions = Array.from<Question>(questions)
    this.answeredQuestions = []
    this.score = 0
  }

  initGame() {
    const question = this.getRandomQuestion()
    this.setCurrentQuestion(question)
  }

  getQuestions(): Question[] {
    return this.questions
  }

  getStrippedQuestions(): Question[] {
    return this.questions.map(({answer, ...strippedData}) => new Question(strippedData))
  }

  getRandomUnasweredQuestion(): Question {
    const randomQuestion = this.getRandomQuestion()
    
    if(this.answeredQuestions.length !== this.questions.length){
      this.setGameState(GameState.Completed)
    }

    if(this.answeredQuestions.some(answeredQuestion => answeredQuestion.id === randomQuestion.id)) {
      return this.getRandomUnasweredQuestion()
    }

    return randomQuestion
  }

  getGameState(): GameState { return this.gameState }
  setGameState(gameState: GameState) { this.gameState = gameState }

  getRandomQuestion(): Question {
    return this.questions[Math.trunc(Math.random() * this.questions.length)]
  }

  setCurrentQuestion(question: Question) { this.currentQuestion = question }

  answerCurrentQuestion(alternativeId: string) {
    const alternative = this.currentQuestion.alternatives.find(alternative => alternative.id === alternativeId)

    if(this.currentQuestion.answer === alternative) {
      this.currentQuestion.setStatus(QuestionStatus.Correct)
      this.score++
    } else {
      this.currentQuestion.setStatus(QuestionStatus.Wrong)
      this.score--
    }
  }

  skipCurrentQuestion() {
    this.currentQuestion.setStatus(QuestionStatus.Skipped)
    this.setCurrentQuestion(this.getRandomUnasweredQuestion())
  }
}