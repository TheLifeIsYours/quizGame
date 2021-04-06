import express from 'express'
const router = express.Router()

const QuizGame = require('../../api/QuizGame');

router.get('/', (req, res) => {
  res.json(QuizGame.listGames())
})

export default router