import { Taco } from "../models/taco.js";


function index (req, res ) {
    Taco.find({})
   .populate('owner')
    .then(taco => {
        console.log(taco);
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

    Taco.create(req.body)
    .then((taco) => {
        console.log(taco);
        res.redirect('/taco')
    })
 }


function showaddtacoview(req, res) {
     res.render('taco/addtaco' )
}

export {
    index,
    addtaco,
    showaddtacoview
}