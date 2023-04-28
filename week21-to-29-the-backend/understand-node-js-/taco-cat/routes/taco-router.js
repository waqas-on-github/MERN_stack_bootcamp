import { Router } from 'express'
import * as TacoCTRl from '../controlers/taco.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()
// localhost 3000/tacos/
router.get('/',    TacoCTRl.index )
router.post ('/' ,   TacoCTRl.addtaco)
router.get('/:id' , TacoCTRl.singletcao)
router.delete('/:id' , TacoCTRl.deletetaco)
router.put('/:id' , TacoCTRl.edittaco)
router.get('/:id/edit' , TacoCTRl.editpage)





export {
  router
}
