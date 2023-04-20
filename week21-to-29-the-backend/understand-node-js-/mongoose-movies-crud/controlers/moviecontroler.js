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
      
        res.redirect('/movies/new')
    })
    .catch((err) => {
        console.log(err);
        res.redirect('/movies/new')

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

export {
    shownew as new ,
    create,
    show,
    details
}
