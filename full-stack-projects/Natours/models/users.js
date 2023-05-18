import mongoose from "mongoose";


const userschema = new mongoose.Schema ({
    name : {
        type :String , 
        required : [true , "user must have a name"]
    }, 
    email : {
        type :String , 
       unique : true , 
       required : [true , 'user must have email'] , 
       lowercase: true , 
    //    validate :[validator.email , 'please provide a valid email']  
    },

     photo :String , 
     
     password : {
       type: String ,
       required : [true , 'user must have password'] , 
       max:8
     },

     passwordconfirm : {
        type: String ,
        required : [true , 'user must have password'] , 
      }
 

})


const User = mongoose.model('User' , userschema)

export {
    User
}   