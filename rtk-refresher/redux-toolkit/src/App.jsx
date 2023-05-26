import { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { addtodo } from '../slices/todoslice'

import './App.css'

function App() {
  const [todo, settodo] = useState('')
  const todostate = useSelector((state) => state.todo.task)

  const dispatch = useDispatch()


  const handlesubmit =(e) => {
    e.preventDefault() ; 
    dispatch(addtodo(todo))

  }


  console.log(todostate);



  return (
   <>
   
   <form onSubmit={handlesubmit}  > 
      <input type="text" onChange={(e) => settodo(e.target.value) }  />
   <button type='submit' > submit</button>
     
   </form>
   
   
   
   </>
  )
}

export default App
