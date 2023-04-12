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
  res.render('new')
}


function  alltodos (req ,res ) {
  todos.find({})
   .then (todo => {   
    res.send(todo)
   })
}




function createtodo (req ,res) {
  console.log(req.body);
  req.body.done=false,
  todos.create(req.body)
  .then( todo => {
    console.log(todo);
    res.redirect('/todos')

  }).catch(error=> {
    console.log(error);
    res.redirect('/todos')

  })

} 


function showbyid (req, res ) {
  console.log(req.params);
} 


export {
    show ,addtodo ,createtodo,alltodos ,showbyid
}