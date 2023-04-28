import { Taco } from "../models/taco.js";


function index (req, res ) {
    Taco.find({})
   .populate('owner')
    .then(taco => {
        res.render('taco/index' , {
            title : "taco page",  
            tacos : taco
        })
    }).catch((err) => {
        console.log(err);
        res.redirect('/')
    })
}




function addtaco (req, res )
 {
  if(req.body.tasty) {
    req.body.tasty=!!req.body.tasty
  }
if(req.user){
  req.body.owner= req.user.profile._id
}


  if(req.user && req.body.name){
    Taco.create(req.body)
    .then((taco) => {
        console.log(taco);
        res.redirect('/tacos')
    })
  }
  else{
    res.render('taco/tacoerrors')
  }
  
   
 }


 function singletcao (req, res) {
  console.log(req.params);
  Taco.findById(req.params.id) 
  .populate('owner')
  .then((taco ) => {
    console.log(taco);
   res.render('taco/singletaco',{
    taco : taco
   })
  })
} 


function deletetaco (req, res ) {
  Taco.findByIdAndDelete(req.params.id) 
  .then((deletedtaco) => {
    
    res.redirect('/tacos')
  })
}

export {
    index,
    addtaco,
    singletcao,
    deletetaco
   
}