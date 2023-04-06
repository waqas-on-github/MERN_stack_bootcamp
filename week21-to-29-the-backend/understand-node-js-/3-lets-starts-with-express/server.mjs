import  express  from "express";
import {todos} from './todos/todos.mjs'
const app = express()
console.log(todos);


app.get('/' ,(req,res) => {
    res.render('heom')
})

app.get('/todo' ,(req,res) => {
    res.render('todos/index' , {
        todo:todos
    })
})



app.listen(3001 ,() => {
    console.log('port is listning');
})

app.set('view engine' ,'ejs')