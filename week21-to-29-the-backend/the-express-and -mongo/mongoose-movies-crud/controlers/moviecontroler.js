import { Movie } from "../model/movie.js";
import { Perfomer } from "../model/perfomer.js";


// show edit movie page 
function shownew (req,res) {
    res.render('addmovie')
   
}

// fill data in data base by getting data from req.body 

function create (req,res ) {
    req.body.nowshowing= !!req.body.nowshowing
    if(req.body.cast){
        req.body.cast = req.body.cast.split(',')

    }
    for(let key in req.body) {
        if((req.body[key]==='') ) {
            delete req.body[key]
        }}
    
    Movie.create(req.body)
    .then((movie) => {
        
        res.redirect('/movies/show')
    })
    .catch((err) => {
        console.log(err);
        res.redirect('/movies/show')

    })
}


// show movies on view 
function show (req,res ) {
   Movie.find({})
   .then((movie) => {

    res.render('showmovies' ,{
        movie: movie
    })
   })
   .catch((err) => {
    console.log(err);
   
   })
     
 }

// find movie by id and show it into edit page 
function details (req,res ) {
    Movie.findById(req.params.id)
    .populate('cast')
    .then((movie) => {
    Perfomer.find({_id: {$nin:movie.cast}})
    .then(performes =>{
        console.log(performes);
    
        res.render('details',{
            movie : movie,
            artist : performes
        })
    })

    }) 
    .catch((err) => {
        console.log(err);
    })

}




// on view page find movie by id and delete 
  function deletemovie (req,res) {
    Movie.findByIdAndDelete(req.params.id)
    .then((movie) => {
        res.redirect('/movies/show')
    })
    .catch((err)=> {
        console.log(err);
    })
  }

// find item by id and send data to editpage 
 function editpage (req, res ) {
    Movie.findById(req.params.id) 
    .then ((movie ) => {
        res.render('editpage' , {
            movie : movie 
        })
    })
 }


// when user press "update " button  data will be set into req.body 
const upadtepage =(req, res ) => {
 Movie.findByIdAndUpdate(req.params.id , req.body , {new : true})
 .then((movie) => {
    res.redirect(`/movies/${movie._id}/edit`)
 }).
 catch((err) => {
    res.redirect("/movies/show")
 })

}

// addding review 
function addReview (req,res) {
console.log(req.params.id);
Movie.findById(req.params.id)
.then((movie) => {
    movie.reviews.push(req.body) 
    movie.save()
    .then(()=> {
        res.redirect(`/movies/${movie._id}/edit`)
    })
    .catch((err) => {
        console.log(err);
        res.redirect(`/movies/${movie._id}/edit`)


  })  .catch((err) => {
    console.log(err);
    res.redirect(`/movies/show`)


})
})


}


// in this controler im pushing id of cast to in uniuqe movie just ids in to cast Array

function adperformer   (req, res ) {
    console.log(req.params.id);
    Movie.findById(req.params.id)
    .then((movie) => {
        movie.cast.push(req.body.content)
        movie.save()
        .then(() => {
            res.redirect(`/movies/${movie._id}/details`)
        })
    }).catch((err) => {
        console.log(err);
    })
    console.log(req.body);
}








export {
    shownew as new ,
    create,
    show,
    details,
    deletemovie,
    editpage,
    upadtepage,
    addReview, 
    adperformer
}
