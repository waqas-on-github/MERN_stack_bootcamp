import React, {useReducer} from 'react'
// if we click a button it dispatches action which call  and reducer function  which update ui 
function Counter() {

  
  function reducer (state ,action ) {
     if(action.type=="increment") {
          return {count : state.count +1 }   
     }
     if(action.type=="decrement") {
        
        return {count : state.count -1 }
   }

   else {
       return state
   }
    // logic of updating in reducer function 

  }

  

  const [state, dispatch] = useReducer( reducer , {count:0})
   

  const updatecounter =() => {
    dispatch({type:"increment"})    // button dispation an action  and calling a reducer function 
    
  }

  const  decreasecounter =() => {
    dispatch({type:'decrement'})      // button dispation an action  and calling a reducer function 
   
  } 




  return (
    <div> 
        <h2>{state.count}</h2>   {/* updating a ui  */}
          <button onClick={() => {
           
            updatecounter()
          }} >+</button>    {/* we click a buttion  */}
          <button   disabled={state.count==0}  onClick={() => decreasecounter()} >-</button>    {/* we click a buttion  */}
          



    </div>
  )
}

export default Counter