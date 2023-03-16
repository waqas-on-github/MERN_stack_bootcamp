import React, { useEffect, useReducer } from 'react'

function Reducerfetch() {

function myreducer (state ,action) {
 
    if(action.type==="setloading") {
        return({...state ,loading:true})
    }  


    if(action.type==="updatedata"){
        return ({...state , posts: [action.payload]})
    }
    

    if(action.type==="setloadingfalse") {
        return({...state,loading:false})
    }

    if(action.type==="nextpost"){
        return ({  ...state, postno:state.postno+1 })
    }

    if(action.type==="prevpost") 
    {
        return ({  ...state, postno:state.postno-1 })
    }

}



let [state ,dispatch] =useReducer( myreducer,{posts:[] , loading : true  ,postno:1 })

async function getposts () {
     const url=`https://jsonplaceholder.typicode.com/posts/${state.postno}`
     dispatch({type:"setloading"})
     let data = await fetch(url)
      data =await data.json()
      dispatch({type:"updatedata"  ,  payload : data})
      dispatch({type:"setloadingfalse"})
} 



useEffect(() => {
    
    getposts()

},[state.postno])



function nextpost () {
    dispatch({type:"nextpost"})
}
function prevpost () {
    dispatch({type:"prevpost"})
}


  return (
    <div>

     {console.log(state)}

     <h2>{state?.posts[0]?.title}</h2>
     <p>{state?.posts[0]?.body}</p>
     <button onClick={() => {nextpost()}} >next</button>
     <button onClick={() => {prevpost()}} >prev</button>


    </div>
  )
}

export default Reducerfetch










