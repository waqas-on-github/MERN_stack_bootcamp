import React, { useReducer } from 'react'

let myreducer =(state ,action )=> {
  


    if (action.type=== "addinp"){
           return {
            ...state ,inpvalue:action.payload
           }
      }
     
    else if (action.type==="addmyvalue"){
      return {
                   ...state ,values:[...state.values , action.payload] 
      }
    }
    else if (action.type === "clearInput") {
      return {
        ...state,
        inpvalue: ""
      };



}} 


function Reducer03() {

  const [state , dispatch ] =useReducer(myreducer ,{values:[] ,inpvalue:''})
  
  

  let sendmycahnge =(e) => {
        dispatch({type:"addinp" ,payload:e.target.value})
  }
  

   const handlechange=()=>
{

  dispatch({type:"addmyvalue" , payload:state.inpvalue}) ;
  dispatch({type: "clearInput"});
}
  return (


    <div>
     {/* ive to do two actions get value from input and add into state and on click of btn ship state into array */}
     {console.log(state)}
    <input type="text"   onChange={(e) => sendmycahnge(e)}  value={state.inpvalue}  placeholder='add  item ' />
     <button onClick={() => {handlechange()}} >add</button>
     {state.values.map((item,idx) => {
      return(
        <div key={idx} > 
        <p>{item}</p>
        

        </div>
      )
     })}
    

    </div>
  )
}

export default Reducer03