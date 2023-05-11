import { Router } from 'express'
import * as tourCTRL from '../controlers/tourscontroler.js'
const router = Router()



// GET localhost:3000/api/v1/tours
router
.post('/'  , tourCTRL.addtour )
.get('/' ,   tourCTRL.getAlltours )
.get('/:id' ,   tourCTRL.getsingletoure)
.get('/delete/:id' , tourCTRL.gettouranddelete )
.get('/update/:id' , tourCTRL.updatetour)


export { router }
