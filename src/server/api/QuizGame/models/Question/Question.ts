import Alternative from "../Alternative/Alternative"

class Question {
  id: string
  question: string
  alternatives: Array<Alternative>
  answer: Alternative
  status: QuestionStatus = QuestionStatus.Unanswered

  constructor(questionData: any) {
    this.id = questionData.id
    this.question = questionData.question
    this.alternatives = questionData.alternatives
    this.answer = questionData.answer
  }

  getQuestion(): String { return this.question }
  getAlternatives(): Array<Alternative> { return this.alternatives }
  getAnswer(): Alternative { return this.answer }

  getStatus(): QuestionStatus { return this.status }
  setStatus(status: QuestionStatus): void { this.status = status }
}

export default Question