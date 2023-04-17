import { Router } from 'express'

const router = Router()

// GET localhost:3000/movies
router.get('/new', function(req, res) {
  res.send("gonna add soon ")
})

export { router }
