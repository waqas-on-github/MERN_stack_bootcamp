import { Router } from 'express'
import * as MC from'../controlers/moviecontroler.js'

const router = Router()

// GET localhost:3000/movies
// show movies on view 
router.get ('/show' ,MC.show)
// fill data in database by getting data from req.body 
router.post('/' ,MC.create)
// show edit movie page 
router.get('/new' , MC.new )
// find movie by id and show it into edit page 
router.get('/:id/details' , MC.details)
// on view page find movie by id and delete 
router.delete('/:id/delete' , MC.deletemovie)
// find item by id and send data to editpage 
router.get('/:id/edit' , MC.editpage)
// when user press "update " button  data will be set into req.body 
router.put('/:id/edit' , MC.upadtepage)

// post a review 

router.post('/:id/reviews' , MC.addReview)


// add an cast 

// movies/64458c2fcd1d08d202b91497/performers
router.post('/:id/performers' ,MC.adperformer )

   
export { router }
