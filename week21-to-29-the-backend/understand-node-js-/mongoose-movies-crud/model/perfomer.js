import mongoose  from "mongoose";


const perfomerschema =new mongoose.Schema({
    content  :{type : String ,required : true }

},{
    timestamps:true
})


const Perfomer= new mongoose.model("Perfomer" , perfomerschema)

export {
    Perfomer
}