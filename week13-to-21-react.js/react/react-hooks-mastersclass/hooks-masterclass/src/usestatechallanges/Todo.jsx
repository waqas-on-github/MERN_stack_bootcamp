import React, {useState } from 'react'
import './state.css'
import { RiDeleteBin7Fill } from "react-icons/ri";


function Todo() {
    
const [val ,setval] =useState('')
const [todos ,settodos] =useState([])
const [isempty ,setisempty] =useState(false)






 function filteritems(givenid) {
   let itm  =todos.filter((item) => {
    return item.id!==givenid
   })

   settodos(itm)


 }

  return (
    <div>
     <h1>challange2 simple Todo</h1>

     {isempty&& <p> can not add empty item</p>}

      <input  

          onChange={(e) => { 
          setval(e.target.value)
           }}
          value={val}
          type="text" placeholder='your todo'

        />


        <button  onClick={() => {

            if(val.length===0) {
                setisempty(true)
            }
            if(val.length!==0){
                setisempty(false)
                settodos([...todos ,{val , id: crypto.randomUUID()}])  
            }
                setval('')  }}

       >addtodo</button>
       
       
         {todos?.map((item) => {
          
            return(
                <div className='todo' key={item.id} ><p>{item.val}</p> <button onClick={() => filteritems(item.id)} ><RiDeleteBin7Fill/></button></div>
            )
        })} 
    </div>
  )
}

export default Todo