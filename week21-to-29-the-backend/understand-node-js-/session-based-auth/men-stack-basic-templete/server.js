
// import npm packages
import 'dotenv/config.js'
import './bin/db.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import createError from 'http-errors'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import MongoStore from 'connect-mongo'

// import routers
import { router as indexRouter } from './routes/index.js'
import { router as cookieRouter } from './routes/cookeie.js'
import { router as sesRouter } from './routes/sesrouter.js'

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


app.use(cookieParser())
const mysessionstore =  MongoStore.create({
  mongoUrl:(process.env.DATABASE_URL),
  dbName:'movies', 
  autoRemove:"disabled", 
  crypto: {
      secret: 'squirrel'
    }
})

app.use(session({
  name: 'waqas-session',
  secret: 'ksagjd129837<slkhf+)_+)_()_(_@!!@#@!@!#8247230-<lkkjkjdhs<uy76u76767',
  resave: false,
  saveUninitialized: false,
  store:mysessionstore,
  cookie: {
    maxAge:  100000000000000000, // 1 day
    secure: (process.env.NODE_ENV === 'production' && req.protocol === 'https'), // Set `secure` flag based on protocol
    httpOnly: true, // Prevent cookie from being accessed through JavaScript
    sameSite: 'strict' // Only send cookie with same-site requests
  

  }
}));

  
;
// mount imported routes
app.use('/', indexRouter)
app.use('/cookies', cookieRouter)
app.use('/sessions' , sesRouter)

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
