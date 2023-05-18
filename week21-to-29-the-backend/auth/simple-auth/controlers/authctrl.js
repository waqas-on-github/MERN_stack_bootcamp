import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

// Now you can use the 'jwt' object as you would with the 'Jwt' named export

function signup (req, res ) {
 User.create (req.body)
 .then((user) => {
    res.json (user)
 }).catch((err) => {
    res.json(err)
 })

}


function getusers (req, res ) {
   User.find({}) 
   .then((users) => {
      res.json(users)
   }).catch((err) => {
      res.json(err)
   })
}


function login (req, res) {   
   const {name , password  } = req.body  
   User.findOne({name:name})

   .then ((user) => {
         console.log(user);
      if(!user) {
         res.redirect("/")
                }
      else {
         console.log(user);
         const token = jwt.sign( {user } , process.env.SECRET , {expiresIn :'24h'})
         console.log(token);

         user.comparepass(password)
        .then((ismatched) => {
         console.log(ismatched);
     }) 

            }

    })   
}

export {
    signup,
    getusers,
    login
}


                                                    
                
               


























