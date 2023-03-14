import React, { useReducer } from 'react'

function Dispatch01() {

    function myreducer (state ,action) {  
      console.log(state + " previous state ")
      console.log(action + " data got from action ")
      console.log(state+action + "data returned to ui ")
        return state+action
          
    }


  const [cont ,dispatch ] =useReducer(myreducer ,0)






  return (
    <div>

      <span>{cont}</span>
      <button onClick={()=>dispatch(1)} >+</button>

    </div>
  )
}

export default Dispatch01