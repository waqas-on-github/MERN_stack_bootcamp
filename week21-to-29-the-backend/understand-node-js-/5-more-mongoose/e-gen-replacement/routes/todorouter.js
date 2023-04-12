import { Router } from "express";
import { addtodo, show ,createtodo,alltodos } from "../controlers/todocontroler.js";

const router = Router()

// define all your routes here 
router.get('/' ,show )
router.get('/show', addtodo)
router.post('/', createtodo)
router.get("/alltodos" , alltodos  )


export {
    router
}