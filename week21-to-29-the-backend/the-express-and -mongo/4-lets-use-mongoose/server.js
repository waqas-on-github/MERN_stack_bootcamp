import 'dotenv/config.js'
import express from 'express'
import './config/db.js'

let app =express()


app.listen(3001 ,() => {
    console.log(`port is listinig at ${3001}`);
})


app.get('/' ,(req ,res ) => {
    res.send("hello")
})


