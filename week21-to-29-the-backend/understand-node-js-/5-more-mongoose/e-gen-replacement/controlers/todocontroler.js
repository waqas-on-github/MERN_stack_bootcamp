import { todos } from "../models/model.js";


function show (req ,res){
   todos.find({})
   .then (todo => {
     res.render('showtodo' , {
      todo :todo  
     })
   })
}


function addtodo (req ,res){   

  res.send ("adding ")
}



export {
    show ,addtodo 
}