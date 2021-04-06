import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  req.session.gameId = req.session.gameId || `gameId#${Math.round(Math.random() * Date.now())}`

  if(req.session.redirect) {
    console.log("redirect", req.session.redirect)
    res.redirect(req.session.redirect)
  }

  res.json({gameId: req.session.gameId})
})

export default router