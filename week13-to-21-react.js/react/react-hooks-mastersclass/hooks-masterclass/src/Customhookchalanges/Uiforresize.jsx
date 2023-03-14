import React from 'react'
import Usewidth from './Usewidth'

function Uiforresize() {
   
 const {width ,height} =Usewidth()

  return (
    <div>

     <p>width  : {width}</p>
     <p>height : {height}</p>

    </div>
  )
}

export default Uiforresize