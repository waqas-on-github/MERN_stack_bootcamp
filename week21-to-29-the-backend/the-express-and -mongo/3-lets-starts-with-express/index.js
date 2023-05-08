// import modules 
const express = require('express')

// create express app 
const app= express()


// mount routes 

app.get('/' ,(req,res) => {
    res.send("hello world")
} )

app.get('/tacos' ,(req,res) => {
    res.send("tacos are here ")
})

app.get('/home' ,(req,res) => {
    res.send('<h1> Home here </h1> ')
})



// tell the app to listin at pictcular port 
const port =3000
app.listen( port ,() => {
    console.log(`port is listning at ${port}`);
})
