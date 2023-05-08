import { Router } from "express";
import { addtodo, show ,createtodo,alltodos ,showbyid, deletebyid ,edit, update } from "../controlers/todocontroler.js";

const router = Router()

// define all your routes here 
router.get('/' ,show )
router.get('/show', addtodo)
router.post('/', createtodo)
router.get("/alltodos" , alltodos)
router.get('/:id' , showbyid)
router.delete('/:id',deletebyid)
router.get('/:id/edit' ,edit)
router.put('/:id' , update)


export {
    router
}