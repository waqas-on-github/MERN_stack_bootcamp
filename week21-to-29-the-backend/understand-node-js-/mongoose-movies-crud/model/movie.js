import mongoose from "mongoose";

const reviewsechema = new mongoose.Schema({
    content : String,
    rating:{type:Number , min:1, max:5}
},{
    timestamps:true
})
const moviesechema = new mongoose.Schema({
    title:String, 
    releasedyear: {type: Number, default: function () {
        return new Date().getFullYear()
    } , min:1927},
    mpaaRating:{type : String , enum :['G' , 'PG' , 'PG-13' , 'R']},
    cast: [String],
    nowShowing :{type: Boolean ,default: false},
    reviews :[reviewsechema]
} ,{
    timestamps:true 
})



const Movie = mongoose.model("Movie" , moviesechema)


export{
    Movie
}