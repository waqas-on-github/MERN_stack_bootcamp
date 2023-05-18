// import npm packages
import 'dotenv/config.js'
import './config/db.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import createError from 'http-errors'
import logger from 'morgan'

// import routers
import { router as indexRouter } from './routes/index.js'
import { router as toursRouter } from './routes/tours.js'
import { Authrouter } from './routes/authrouter.js'

// create the express app
const app = express()

// view engine setup
app.set('view engine', 'ejs')

// basic middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)

// mount imported routes
app.use('/', indexRouter)
app.use('/api/v1/tours', toursRouter)
app.use('/users' , Authrouter)

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
