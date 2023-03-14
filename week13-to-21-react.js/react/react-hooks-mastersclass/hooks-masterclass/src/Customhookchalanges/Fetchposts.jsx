import React from 'react'
import Usefetch from './Usefetch'

function Fetchposts() {

   let {data ,setnextpost ,setprevpost } =Usefetch()
   
   

  return (
    <div>
     <h1>fetch post challange </h1>
       <h2>{data?.title}</h2>
       <p>{data?.body}</p>
       <p>{data?.id}</p>
    
       <button onClick={() => {
         setnextpost(per=>per-1)
       }}>prev</button>

       <button onClick={() => {
        setnextpost(per=> per +1)
       }} > next</button>

    </div>
  )
}

export default Fetchposts