import { Taco } from "../models/taco.js";
import { Profile } from "../models/profile.js";


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

    if(req.user.profile._id.equals(req.body.owner)){

   
    Taco.create(req.body)
    .then((taco) => {
     
      
     
        res.redirect('/tacos')
    }).catch((err) => {
      console.log(err);
      res.redirect('/tacos')
    })
  }}
  else{
    res.render('taco/tacoerrors')
  }
  
   
 }

 function singletcao (req, res) {
  Taco.findById(req.params.id) 
  .populate('owner')
  .then((taco ) => {
   res.render('taco/singletaco',{
    taco : taco
   })
  }).catch((err) => {
    console.log(err);
    res.redirect('/tacos')
  })
} 

function deletetaco (req, res ) {
  Taco.findByIdAndDelete(req.params.id) 
  .then((deletedtaco) => {
    
    res.redirect('/tacos')
  })
  .catch((err) => {
    console.log(err);
    res.redirect('/tacos')
  })
}

const editpage  = (req, res ) => {
Taco.findById(req.params.id)
.then((taco) => {
  

  res.render('taco/edittaco' , {
    taco : taco
  } )
 
}) .catch((err) => {
  console.log(err);
  res.redirect('/tacos')
})

}


function edittaco (req, res) {

  Taco.findByIdAndUpdate(req.params.id , req.body , {set : true})
  .then(() => {
    res.redirect('/tacos')
  })
  .catch((err) => {
      console.log(err);
      res.redirect('/tacos')
    })
}


function maketacotasty (req, res) {
  Taco.findById(req.params.id) 
  .then((taco) => {
    taco.tasty= !taco.tasty
    taco.save() 
    .then(() => {
      res.redirect('/tacos')
    })
  })
  
}

export {

    index,
    addtaco,
    singletcao,
    deletetaco,
    editpage,
    edittaco,
    maketacotasty
   
}