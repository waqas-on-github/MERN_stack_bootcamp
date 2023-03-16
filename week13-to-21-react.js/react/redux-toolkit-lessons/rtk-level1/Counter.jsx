import React, { useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import{increment ,decrement,addten ,reset ,customadd}  from './src/features/counter/Counterslice'

function Counter() {
    let [val,setval] =useState(0)
    const counter = useSelector((state) => state)
    let dispatch=useDispatch()
    
  return (
    <div>
       <p>{counter.counter.value}</p>

       <input type="text"  value ={val} onChange={(e) => {setval(e.target.value)}} />
       <button onClick={()=> dispatch(increment())} >+</button>
       <button onClick={()=> dispatch(decrement())} >-</button>
       <button onClick={()=> dispatch(addten())} >add by 10 </button>
       <button onClick={() => dispatch(reset())} >reset</button>
       <button  onClick={() => dispatch(customadd(Number(val)))} > custom</button>

    </div>
  )
}

export default Counter