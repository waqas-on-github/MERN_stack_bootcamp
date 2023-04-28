import mongoose, { Schema } from "mongoose";



const Tacoschema =  new mongoose.Schema({
    name : String, 
    tasty : Boolean, 
    owner : [{type : Schema.Types.ObjectId, ref : "Profile" }]
   

} , {
    timestamps:true 
})

const Taco = mongoose.model('Taco' , Tacoschema)


export {
   Taco
}