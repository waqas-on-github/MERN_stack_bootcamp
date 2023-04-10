import { todos } from "../models/model.js";


function show (req ,res){
   todos.find({})
   .then (todo => {
     res.send(todo)
   })
}


export {
    show
}