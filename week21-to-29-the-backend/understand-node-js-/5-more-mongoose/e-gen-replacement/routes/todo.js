import { Router } from "express";
import { show } from "../controlers/todocontroler.js";

const router = Router()


router.get('/' ,show )


export {
    router
}