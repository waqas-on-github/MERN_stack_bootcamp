import mongoose from 'mongoose'

const db = mongoose.connection

mongoose.set('strictQuery', false)

try {
  mongoose.connect(process.env.DATABASE_URL)
  
} catch (error) {
  throw error
}


db.on('connected', function () {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})
