// import npm packages

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import createError from 'http-errors'
import logger from 'morgan'
import  MethodOverride  from 'method-override'
// import routers
import { router as indexRouter } from './routes/index.js'
import { router as usersRouter } from './routes/movies.js'
import {router as perfomerrouter} from './routes/perfomerrouter.js'


// create the express app
const app = express()

// view engine setup
app.set('view engine', 'ejs')
app.use(MethodOverride('_method'))
// basic middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)
app
// mount imported routes
app.use('/', indexRouter)
app.use('/movies', usersRouter)
app.use('/perfomer' , perfomerrouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export { app }
