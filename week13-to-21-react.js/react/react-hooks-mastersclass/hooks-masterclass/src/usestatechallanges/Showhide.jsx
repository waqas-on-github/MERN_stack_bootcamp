import React, { useState } from 'react'

function Showhide() {
 const [hidden ,sethidden] =useState(true)


  return (
      <div className=""> 
      
       <div className=""> 


       {!hidden?<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, iure.</p> :"" }
       
       <button onClick={() => {
        sethidden(!hidden)
       }}>{hidden?'show' :"hide"}</button>
       
       </div>
        
      
      
      </div>
  )
}

export default Showhide