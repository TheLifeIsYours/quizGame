import express from 'express'
const router = express.Router()

declare module "express-session" {
  interface Session {
    hasAuth: Boolean;
    gameId: string;
    redirect: string;
  }
}

router.get('/', (req, res) => {
  if(req.session.hasAuth) {
    if(req.session.redirect) { 
      res.redirect(req.session.redirect)
    } else {
      res.redirect('/profile')
    }
  }

  res.redirect('/auth/signin')
})

router.post('/signin', (req, res) => {
    
})

router.post('/signup', (req, res) => {

})

export default router