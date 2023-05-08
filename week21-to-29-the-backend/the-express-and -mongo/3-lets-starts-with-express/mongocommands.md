Show Current Database
 db

Show All Databases
  show dbs

Create Or Switch Database
  use blog

Drop Database

  db.dropDatabase()
Create Collection

  db.createCollection('posts')
Show Collections

  show collections
Insert Document
  
db.posts.insertOne({
  title: 'Post 1',
  body: 'Body of post.',
  category: 'News',
  likes: 1,
  tags: ['news', 'events'],
  date: Date()
})

Insert Multiple Documents

db.posts.insertMany([
  {
    title: 'Post 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: ['news', 'events'],
    date: Date()
  },
  {
    title: 'Post 3',
    body: 'Body of post.',
    category: 'Tech',
    likes: 3,
    tags: ['news', 'events'],
    date: Date()
  },
  {
    title: 'Post 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: ['news', 'events'],
    date: Date()
  },
  {
    title: 'Post 5',
    body: 'Body of post.',
    category: 'News',
    likes: 5,
    tags: ['news', 'events'],
    date: Date()
  }
])
Find All Documents

db.posts.find()


Find Documents with Query

db.posts.find({ category: 'News' })



<!-- sorting documents  -->

Ascending
db.posts.find().sort({ title: 1 })


Descending
db.posts.find().sort({ title: -1 })


 <!-- counting documents  -->
 db.posts.find().count()
db.posts.find({ category: 'news' }).count()


<!-- Limit Documents -->  

db.posts.find().limit(2)

<!-- Chaining -->
db.posts.find().limit(2).sort({ title: 1 })



<!-- Find One Document -->
db.posts.findOne({ likes: { $gt: 3 } })      -->  gt= greater then 


<!-- updating documents  -->


db.posts.updateOne({ title: 'Post 1' },
{
  $set: {
    category: 'Tech'
  }
})


<!-- itll set specific property of objects without changing other properties  -->

<!-- Update Document or Insert if not Found  && even one field -->

db.posts.updateOne({ title: 'Post 6' },
{
  $set: {
    title: 'Post 6',
    boy: 'Body of post.',
    category: 'News'
  }
},
{
  upsert: true
})


ncrement Field ($inc)
db.posts.updateOne({ title: 'Post 1' },
{
  $inc: {
    likes: 2
  }
})
Update Multiple Documents
db.posts.updateMany({}, {
  $inc: {
    likes: 1
  }
})
Rename Field
db.posts.updateOne({ title: 'Post 2' },
{
  $rename: {
    likes: 'views'
  }
})
Delete a Document
db.posts.deleteOne({ title: 'Post 6' })
Delete Multiple Documents
db.posts.deleteMany({ category: 'Tech' })
Greater & Less Than
db.posts.find({ views: { $gt: 2 } })
db.posts.find({ views: { $gte: 7 } })
db.posts.find({ views: { $lt: 7 } })
db.posts.find({ views: { $lte: 7 } })
