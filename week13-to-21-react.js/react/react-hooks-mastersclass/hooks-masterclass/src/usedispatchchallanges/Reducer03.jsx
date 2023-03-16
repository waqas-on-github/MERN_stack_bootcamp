import React, { useReducer } from 'react'
import './reducers.css'
import { RiDeleteBin7Fill } from 'react-icons/ri';



let myreducer =(state ,action )=> {
  
if(action.type==='addinp') {
  return ({...state , inpvalue:action.payload})
}

if(action.type==='addmyvalue'){
  if(state.inpvalue.length===0) {
    return ( {...state, error:"err"})
  }
     return {...state , values:[ ...state.values ,{value:action.payload ,key:Math.random()}], inpvalue:""}
}

if(action.type==='removeitem') {
    let  filterditems= state.values.filter((item) => {
            return ( item.key !==action.payload)
        })
   return { ...state, values: filterditems }
      
}




} 



function Reducer03() {

  const [state , dispatch ] =useReducer(myreducer ,{values:[],inpvalue:''})
  
  

  let sendmycahnge =(e) => {
dispatch({type:"addinp" ,payload:e.target.value})
  }
  

   const handlechange=()=>
{

  dispatch({type:"addmyvalue" , payload:state.inpvalue}) ;


}

const removeitem =(id) => {
   dispatch ({type: "removeitem" ,payload :id})

}




  return (


    <div>
     {/* ive to do two actions get value from input and add into state and on click of btn ship state into array */}
    <input type="text"   onChange={(e) => sendmycahnge(e)}  value={state?.inpvalue || ""}  placeholder='add  item ' />
     <button onClick={() => {handlechange()}} >add</button>

     {state?.values?.map((item) => {
      return(
        <div className='flexit' key={item.key} > 
          <p>{item.value}</p>  <button onClick={() => removeitem(item.key)} > <RiDeleteBin7Fill/></button> 
        </div>
      )
     })}
    
    

    </div>
  )
}

export default Reducer03