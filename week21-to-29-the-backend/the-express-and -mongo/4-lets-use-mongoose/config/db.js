import mongoose from "mongoose";
mongoose.set('strictQuery' ,false)
const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URL)


db.on('connected' ,() => {
    console.log(`connetct to ${db.name} with host name : ${db.host} and por number ${db.port    }`);
})
