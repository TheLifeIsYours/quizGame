const express = require('express');
const session = require("express-session");

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
fs.readdirSync(path.join(__dirname, 'routes')).forEach(route => {
  route = route.substr(0, route.lastIndexOf('.'));
  app.use(`/api/${route}`, require(`./routes/${route}`));
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send()
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on \x1b[33m${process.env.PORT}\n\x1b[34mhttp://localhost:${process.env.PORT}`)
})
