import { Router } from 'express'
import * as cookieCTRL from '../controlers/cookiework.js'
const router = Router()

// GET localhost:3000/cookie

// set cookies 
router.get('/set', cookieCTRL.setstr )
router.get('/setobj' , cookieCTRL.setobj )

// read cookies 

router.get('/read' ,  cookieCTRL.read)


// update cookie 

router.get('/update' , cookieCTRL.update)

// delete cookie 
router.get('/delete' , cookieCTRL.deletecookie)






export { router }
