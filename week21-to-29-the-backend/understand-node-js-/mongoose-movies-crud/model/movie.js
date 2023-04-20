import mongoose from "mongoose";

const moviesechema = new mongoose.Schema({
    title:String, 
    releasedyear: {type: Number, default: function () {
        return new Date().getFullYear()
    } , min:1927},
    mpaaRating:{type : String , enum :['G' , 'PG' , 'PG-13' , 'R']},
    cast: [String],
    nowShowing :{type: Boolean ,default: false}
} ,{
    timestamps:true 
})



const Movie = mongoose.model("Movie" , moviesechema)


export{
    Movie
}