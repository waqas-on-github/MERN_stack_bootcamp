import 'dotenv/config.js'
import express from 'express'
import './config/db.js'

let app =express()


app.listen(3000 ,() => {
    console.log(`port is listinig at ${3000}`);
})


app.get('/' ,(req ,res ) => {
    res.send("hello")
})


