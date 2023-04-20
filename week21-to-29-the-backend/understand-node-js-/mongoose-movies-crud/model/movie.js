import mongoose from "mongoose";

const moviesechema = new mongoose.Schema({
    title:String, 
    releasedyear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing :Boolean
} ,{
    timestamps:true 
})



const Movie = mongoose.model("Movie" , moviesechema)


export{
    Movie
}