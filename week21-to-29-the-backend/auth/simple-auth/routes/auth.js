import { Router } from 'express'

import * as authctrl from '../controlers/authctrl.js'
import { authware } from '../middlewares/authware.js'

const router = Router()

// GET localhost:3000/signup
router.post('/signup', authctrl.signup)
router.get ('/allusers' , authctrl.getusers)
router.post('/login',   authctrl.login )

router.get('/secret'  , authware ,  (req, res ) => {
    res.json("secret info only for authed users ")
})



export { router }
