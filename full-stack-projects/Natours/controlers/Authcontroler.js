import { User } from "../models/users.js";


function  signup (req, res ) {
   User.create (req.body) 
   .then((user) => {
    res.json(user)
   }).catch((err) => {
    rse.json(err)
   })
}



function readallusers (req, res ) {
    User.find()
    .then((users) => {
        res.json(users)
    }).catch((err) => {
        res.json(err)
    })
 }


function login (req, res) {
    User.findOne(req.body)
    .then((user) => {
        res.json(user)
    })
}



export {
    signup,
    readallusers ,
    login
}