import { Profile } from "../models/profile.js";


function index (req, res ) {
    Profile.find({})
    .then((profiles) => {
       res.render('profiles/index' , {
        profile : profiles
       })
    })
    .catch((err) => {
        res.send(err)
    })
}



function show (req, res) {
    Profile.findById(req.params.id ) 
    .then((profile ) => {
        res.send(profile)
        
    })
    .catch((err) => {
        res.send(err)
    })

}

export {
    index
    , show
}