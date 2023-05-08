function passDataToView(req, res, next) {
  if (req.user) {
    res.locals.user = req.user;
  } else {
    res.locals.user = null;
  }
  
  res.locals.googleClientID = process.env.GOOGLE_CLIENT_ID
  next()
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}

export {
  passDataToView,
  isLoggedIn,
}
