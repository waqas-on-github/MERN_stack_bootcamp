import { Router } from "express";
import { addtodo, show ,createtodo,alltodos ,showbyid, deletebyid } from "../controlers/todocontroler.js";

const router = Router()

// define all your routes here 
router.get('/' ,show )
router.get('/show', addtodo)
router.post('/', createtodo)
router.get("/alltodos" , alltodos  )
router.get('/:id' , showbyid)
router.delete('/:id',deletebyid)


export {
    router
}