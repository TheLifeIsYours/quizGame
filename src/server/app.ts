import express from 'express'
import session from 'express-session'

const dotenv = require('dotenv-flow').config({silent: true});
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const fs = require('fs');

const app = express();

//Session
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: require('crypto').randomBytes(64).toString('hex'),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 *7 // 1 week
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(express.static(path.join(__dirname, '../../dist')));

//Path router
function setupRoutes(entry: string) {
  console.log("Entry:", path.join(__dirname, entry))
  fs.readdirSync(path.join(__dirname, entry)).forEach(async (route: string) => {
    
    const hasSubRoute = (route.lastIndexOf('.') <= 0)
    // console.log({hasSubRoute})

    if(hasSubRoute) {
      console.log("Entering new route:", path.join(entry, route))

      setupRoutes(path.join(entry, route))
    } else {

      route = path.join(entry, route)
      route = route.substr(0, route.lastIndexOf('.'))
      
      const uri = route.substr(route.indexOf('/'))

      console.log(`Applying route: \x1b[33m[\x1b[34m${uri}\x1b[0m => \x1b[34m./${route}\x1b[33m]`)

      app.use(`${uri}`, await import(`./${route}`))
    }
  })
}

setupRoutes('routes')
app.use('/*', (req, res) => res.sendFile(path.join(__dirname, '../../dist/index.html')))

export default app