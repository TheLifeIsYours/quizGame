import express from 'express'
const router = express.Router()

import QuizGame from '../../api/QuizGame'

router.get('/:id', (req, res) => {
  if(req.session.gameId == undefined) {
    req.session.redirect = req.originalUrl
    res.redirect('/api/new')
  }

  const quizGame = QuizGame.getGame(req.params.id)

  if(quizGame)
    res.json({gameId: req.session.gameId, ...quizGame})

  res.status(404)
  res.json({"message": "game not found"})
})

export default router