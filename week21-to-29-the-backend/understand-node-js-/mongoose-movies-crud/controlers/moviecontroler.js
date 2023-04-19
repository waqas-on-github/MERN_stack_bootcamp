import { Movie } from "../model/movie.js";

function show (req,res ) {
    console.log(req.time);
    res.send("showing movies")
}


function newmovie (req, res ) {
    Movie.create({
        title:"my movie", 
    releasedyear: 33,
    mpaaRating: '4 star ',
    cats : ['blabla bal'],
    nowShowing :true
    }).then((movie) => {
        console.log(movie);
    })
}

export {
    show,
    newmovie as new
}
