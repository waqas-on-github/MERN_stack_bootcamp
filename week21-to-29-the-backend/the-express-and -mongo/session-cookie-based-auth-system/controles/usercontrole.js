import bcrypt from  'bcryptjs'
import { userModel } from '../models/user.js';

function home(req, res) {
  res.render('index');
}

function createuser(req, res) {
    userModel.create(req.body)
      .then((user) => {
        console.log(user);
        res.redirect('/users');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error creating user');
      });
  }

  function login  (req, res ) {

    userModel.findOne({email:req.body.email}).
    then((user) => {
      const ismatched = bcrypt.compare(req.body?.password , user?.password) 
      if(user?.email === req.body.email && ismatched){
        res.send('dashboard ... ')
      }
      else {
        res.send("email or password is wrong ")
      }
      console.log(user);
    }).catch((err) => {
      console.log(err);
    })
  }
  

export {
  home,
  createuser, 
  login
};
