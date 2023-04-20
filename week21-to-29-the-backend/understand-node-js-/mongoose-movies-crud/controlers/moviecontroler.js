import { Movie } from "../model/movie.js";



function shownew (req,res) {
    res.render('addmovie')
   
}



function create (req,res ) {
    req.body.nowshowing= !!req.body.nowshowing
    if(req.body.cast){
        req.body.cast = req.body.cast.split(', ')

    }
    Movie.create(req.body)
    .then((movie) => {
      
        res.redirect('/movies/show')
    })
    .catch((err) => {
        console.log(err);
        res.redirect('/movies/show')

    })
}


function show (req,res ) {
   Movie.find({})
   .then((movie) => {
    console.log(movie);
    res.render('showmovies' ,{
        movie: movie
    })
   })
   .catch((err) => {
    console.log(err);
   
   })
     
 }


function details (req,res ) {
    Movie.findById(req.params.id)
    .then((movie) => {
        res.render('details',{
            movie : movie
        })
    }) 
    .catch((err) => {
        console.log(err);
    })

}


  function deletemovie (req,res) {
    Movie.findByIdAndDelete(req.params.id)
    .then((movie) => {
        res.redirect('/movies/show')
    })
    .catch((err)=> {
        console.log(err);
    })
  }


 function editpage (req, res ) {
    Movie.findById(req.params.id) 
    .then ((movie ) => {
        res.render('editpage' , {
            movie : movie 
        })
    })
 }

const upadtepage =(req, res ) => {
 Movie.findByIdAndUpdate(req.params.id , req.body , {new : true})
 .then((movie) => {
    res.redirect(`/movies/${movie._id}/edit`)
 }).
 catch((err) => {
    res.redirect("/movies/show")
 })

}


export {
    shownew as new ,
    create,
    show,
    details,
    deletemovie,
    editpage
    ,upadtepage
}
