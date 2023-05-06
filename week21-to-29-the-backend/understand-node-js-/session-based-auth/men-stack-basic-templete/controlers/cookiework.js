function setstr (req, res )  { 
  res.cookie('name' ,  "waqas" )   // this will set cookie in browser  on above route 
  res.send("cookie set")

}

function setobj (req, res ) {
  const user ={
    name : 'imran' ,
    scammer : true 
  }

  res.cookie('user' , JSON.stringify(user), {
   expires: new Date(Date.now() + ( 60000 *10)),   // itll delete automatically after time we specified 
   httpOnly: true,
   secure: true
  })
  res.send('obj cooke set ')
}
// reasd cookies 

function read (req,res) {
   console.log(req.cookies); 
   const user = JSON.parse(req.cookies.user)

   console.log(user);
   res.send(` hello mr ${user.name }  you are ${user.scammer ? "scammer" : "good boy"} `)
}



function update (req, res ) {
      
   res.cookie( 'name', "waqas awan")
   res.send('cookie updated')
}

function deletecookie  (req, res ) {
   
   res.clearCookie('waqas')  // clear one cookie by name 

   Object.keys(req.cookies).forEach((onecooke) => { // clear all cookies 
      res.clearCookie(onecooke)
   })
   res.send('cookie cleared ')
}


export{
   setstr,
   setobj,
   read,
   update, 
   deletecookie
}