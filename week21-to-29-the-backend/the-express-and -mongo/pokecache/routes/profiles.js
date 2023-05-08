import { Router } from 'express'
import * as profilesCtrl from '../controlers/profiles.js'

const router = Router()
//      localhost300/ profiles
router.get('/', profilesCtrl.index )
router .get('/:id' , profilesCtrl.show)


export {
  router
}
