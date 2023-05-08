import { todos } from "../models/model.js";

// will show single todo 
function show (req ,res){
   todos.find({})
   .then (todo => {
     res.render('showtodo' , {
      todo :todo  
     })
   })
}


// wiil bring to froms page where input is abailabel for adding new todo items 
function addtodo (req ,res){   
  res.render('new')
}

// show  all todos  in json format 
function  alltodos (req ,res ) {
  todos.find({})
   .then (todo => {   
    res.send(todo)
   })
}




// cretae todo item and save it into db 

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

// will show single todo item 
function showbyid (req, res ) {
  console.log(req.params);
  todos.findById(req.params.id)
  .then((todo) => {
    res.render('onetodo' ,{
      todo:todo
    })
  }).catch(error=>{
    console.log(error );
  })
} 

// will delete specific todo item 

function deletebyid(req, res) {
console.log(req.params.id)
 todos.findByIdAndDelete(req.params.id)
 .then(()=> {
  res.redirect('/todos')
 })

}


function edit(req,res) {
  todos.findById(req.params.id)
  .then((todo) => {
    console.log(todo);
    res.render('editform',{
      todo : todo
    })
  })
}


function update (req,res) {
  todos.findByIdAndUpdate(req.params.id ,req.body,{new:true})
  .then((todo) => {
   res.redirect(`/todos/${todo.id}`)
  })
}

export {
    show ,addtodo ,createtodo,alltodos ,showbyid ,deletebyid ,edit,update 
}

