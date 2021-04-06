import app from './app'

app.listen(process.env.PORT, () => {
  console.log(`Server listening on \x1b[33m${process.env.PORT}\n\x1b[34mhttp://localhost:${process.env.PORT}`)
})

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   let err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   res.status(err.status || 500);
//   res.send()
// });