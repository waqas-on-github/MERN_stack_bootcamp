import { Router } from 'express'
import * as MC from'../controlers/moviecontroler.js'

const router = Router()

// GET localhost:3000/movies
router.get ('/' ,MC.show)
router.get('/new', MC.new)
   
export { router }
