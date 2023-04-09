import { Router } from "express";
import { todos } from '../data/db.js'

const router = Router()


router.get('/' ,(req,res) => {
    res.render('todo' ,{
        todo:todos
    })
})

export{router}