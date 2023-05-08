import { Router } from "express";
import { Profile } from "../models/profile.js";
import * as profileCTRL from "../controlers/profiles.js";

const router= Router()

router.get('/' ,  profileCTRL.index)
router.get('/data' , profileCTRL.jsnindex)
router.get('/:id' ,profileCTRL.show)



// json routers 






export{
    router
}