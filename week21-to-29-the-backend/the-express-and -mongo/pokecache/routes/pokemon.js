import { Router } from 'express'
import * as pokeCtrl from '../controlers/pokemon.js'

const router = Router()
//      localhost300/pokemon 
router.get('/', pokeCtrl.index )
router .get('/:id' , pokeCtrl.show)


export {
  router
}
