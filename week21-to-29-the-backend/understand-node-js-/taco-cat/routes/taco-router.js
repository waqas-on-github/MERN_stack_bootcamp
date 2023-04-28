import { Router } from 'express'
import * as TacoCTRl from '../controlers/taco.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()
// localhost 3000 /taco/
router.get('/',   isLoggedIn ,  TacoCTRl.index )
router.post ('/add' , isLoggedIn,  TacoCTRl.addtaco)
router.get('/add' , isLoggedIn, TacoCTRl.showaddtacoview)


export {
  router
}
