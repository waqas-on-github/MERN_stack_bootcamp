import{ Tour }from '../models/tours.js'
// import fs from 'node:fs/promises'


// async function  loadtuoursdata() {
//   const data = await  fs.readFile('./data/tours.json' , 'utf-8')
//    Tour.create(JSON.parse(data))
//    .then((data ) => {
//     Tour.find((updata) => {
//         console.log(updata);
//     })
//    })
// } 

// loadtuoursdata()


function addtour (req, res ) {

    Tour.create(req.body) 
    .then((tour) => {
        res.json({
            data : {
                tour : tour
            }
        })
    }).catch((err) => {
        res.json(err)
    })
    
}


function getAlltours (req, res) {
  
    Tour.find(req.query)
    .then((tours) => {
        res.json({
            data: {
                alltours: tours
            }
        })
    }).catch((err) => {
        res.send(err)
    }) 

}

function getsingletoure (req, res)  {
    Tour.findById(req.params.id) 
    .then((item ) => {
        res.json(item)

    }).catch((err) => {
        res.json(err)
    })

}


function gettouranddelete (req, res ) {
    Tour.findByIdAndDelete(req.params.id) 
    .then(( Tour.find({}) 
            
    .then((items) => {
            res.json(items)
            }).catch((err) => {
                res.json(err)
            })
            
            
            )).catch((err) => {
                res.json(err)
            })
}


function updatetour (req, res ) {
    console.log(req.body);
   Tour.findByIdAndUpdate(req.params.id , req.body , {new:true})
  .then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  })
    

}


export {
    addtour,
    getAlltours,
    getsingletoure, 
    gettouranddelete, 
    updatetour, 
}