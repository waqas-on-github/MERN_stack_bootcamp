	import mongoose from "mongoose";
mongoose.set('strictQuery' ,false)
const db = mongoose.connection

mongoose.connect('mongodb+srv://waqasvu892:Txhh4ZDoXI4abHGg@cluster0.4ude9ub.mongodb.net/test' )


db.on('connected' ,() => {
    console.log(`connetct to ${db.name} with host name : ${db.host} and por number ${db.port}`);
})
