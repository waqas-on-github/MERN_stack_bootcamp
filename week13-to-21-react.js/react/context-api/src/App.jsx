import React, { useContext } from 'react'
import About from './About'
import mycontext from './mycontext'

function App() {
   let val =useContext(mycontext)
  
   

  return (
    <div style={{backgroundColor: val.val.color}} >

    
    {val.val.color!=="black" ? <button onClick={() => {
         val.setval( prev => (
          {
            ...prev ,color: "black"
          }
         ))
     }} >  datk  </button> : <button   onClick={() => {
      val.setval( prev => (
       {
         ...prev ,color: "white"
       }
      ))
  }} > light </button> }

       <p>name : {val.val.name}</p>
      <p>age :{val.val.age}</p>

      <button onClick={() => {
          val.setval(prevstate =>  ({
            ...prevstate , name: 'imran'
          }))
      }} >update name </button>

      <button  onClick={() => {
        val.setval( prev => ( {
          ...prev ,age:prev.age+1
        }))
      }} > update age </button> 
      
      <About/>
       </div>


  )
}

export default App