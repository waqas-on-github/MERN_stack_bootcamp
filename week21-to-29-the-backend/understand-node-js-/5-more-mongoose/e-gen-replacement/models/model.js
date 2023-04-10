import mongoose from "mongoose";



const todoschema =  new mongoose.Schema(
    {
        text:String, 
        done:Boolean,
        _id:Number
    }
)

const todos = mongoose.model('todos' , todoschema)
export {
    todos
}