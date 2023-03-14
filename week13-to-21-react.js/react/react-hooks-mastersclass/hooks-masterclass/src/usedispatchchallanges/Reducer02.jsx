 import React, { useReducer } from 'react'
 
 function Dispatch02() {

function myreducer (state ,action ) {

  if(action.type==="increment"){
         console.log(action)
         console.log(state)

         return {count : state.count +1 }   
   
  }

  if(action.type==="derement"){
      console.log(action)
      console.log(state)
      return {count : state.count -1 }   
}

}





 const [state ,dispatch] =useReducer(myreducer ,{count:0})


function increament () {
  dispatch({type:"increment"})
}

function decrement () {
   dispatch({type:"derement"})
}


   return (
     <div>
  
             <p>{state.count}</p>
            <button onClick={()=> increament()} >+</button>
            <button onClick={()=> decrement()} >-</button>
     </div>
   )
 }
 
 export default Dispatch02