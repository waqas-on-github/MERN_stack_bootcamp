import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  console.log(req.user);
  res.render('index', { title: 'Home Page' })
  
})

export {
  router
}
