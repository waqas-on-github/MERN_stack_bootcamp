import { Router } from "express";
import * as profileCTRL from "../controlers/profiles.js";

const router= Router()

router.get('/' ,  profileCTRL.index)
router.get('/:id' ,profileCTRL.show)




export{
    router
}