import * as Authcontroler from "../controlers/Authcontroler.js";

import { Router } from "express";

const router = Router()

router.post('/signup' , Authcontroler.signup)
router.get('/' , Authcontroler.readallusers )
router.post('/login' , Authcontroler.login)

export {
    router as Authrouter
}
