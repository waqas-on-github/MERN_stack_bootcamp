import { Router } from 'express'
import  * as userCTRL from '../controles/usercontrole.js'

const router = Router()

// GET localhost:3000/users
router.get('/' , userCTRL.home)
router.post('/' , userCTRL.createuser)
router.get('/login' , (req, res ) => res.render('login'))
router.post('/login' , userCTRL.login)

export { router }
