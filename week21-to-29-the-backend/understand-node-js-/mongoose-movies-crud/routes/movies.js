import { Router } from 'express'
import * as MC from'../controlers/moviecontroler.js'

const router = Router()

// GET localhost:3000/movies
router.get ('/show' ,MC.show)
router.post('/' ,MC.create)
router.get('/new' , MC.new )
router.get('/:id/details' , MC.details)
router.delete('/:id/delete' , MC.deletemovie)
router.get('/:id/edit' , MC.editpage)
router.put('/:id/edit' , MC.upadtepage)


   

   
export { router }
