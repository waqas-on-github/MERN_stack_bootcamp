import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setposts } from './postSlice'


function Sendposts() {
let dispatch=useDispatch()
const [title,settitle] =useState('')

const [discp ,setdiscp] = useState('')


  return (
    <div className='flex flex-col justify-center items-center gap-5 p-10'  >
    
   <label htmlFor=""> title:        <input value={title}  onChange={(e) => {  settitle(e.target.value) }} className='m-3' type="text" placeholder='item' /></label> 
   <label className='flex  items-center' htmlFor="">  discription: <textarea value={discp} onChange={(e) => {   setdiscp(e.target.value)}}  className='m-3' type="text" placeholder='discription' /></label> 
    <button  onClick={ ()=>{
      if(title&&discp) {
   
        dispatch(setposts(title,discp)) 
           settitle('')
           setdiscp('')
      }
    }
    }  className='focus:bg-gray-600 focus:p-2'  >save</button>




    </div>
  )
}

export default Sendposts