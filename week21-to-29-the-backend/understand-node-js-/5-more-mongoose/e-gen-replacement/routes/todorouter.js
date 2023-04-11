import { Router } from "express";
import { addtodo, show } from "../controlers/todocontroler.js";

const router = Router()

// define all your routes here 
router.get('/' ,show )
router.get('/show', addtodo)


export {
    router
}