import { Router } from 'express'

import * as authctrl from '../controlers/authctrl.js'

const router = Router()

// GET localhost:3000/signup
router.post('/signup', authctrl.signup)
router.get ('/allusers' , authctrl.getusers)
router.post('/login',authctrl.login )



export { router }
