import { Router } from "express";
import * as sesCTRL from "../controlers/sescontroler.js";
const router = Router()

router.get('/read' , sesCTRL.read)
router.get('/destroy', sesCTRL.destroy)
router.get('/regen' , sesCTRL.regenrate)
router.get('/views'  , sesCTRL.countviews)


export {
    router
}
