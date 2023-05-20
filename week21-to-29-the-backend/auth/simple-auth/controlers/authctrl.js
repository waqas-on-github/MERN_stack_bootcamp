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


function login(req, res) {
   const { name, password } = req.body;
 
   User.findOne({ name: name })
     .then((user) => {
       if (!user) {
         return res.status(404).send('User not found');
       } else {
         user.comparepass(password)
           .then(() => {
             const token = jwt.sign({ user_id: user.id }, process.env.SECRET, { expiresIn: '24h' });
             return res.header('auth-token', token).send(token);
           })
           .catch((error) => {
             return res.status(401).send('Invalid password');
           });
       }
     })
     .catch((error) => {
       return res.status(500).send('Internal server error');
     });
 }
 





export {
    signup,
    getusers,
    login
}


                                                    
                
               


























