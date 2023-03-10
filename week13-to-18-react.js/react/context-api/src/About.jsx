import React, { useContext } from 'react'
import mycontext from './mycontext';

function About() {

let val  =useContext(mycontext)

console.log(val);

  return (
    <div style={{backgroundColor:val.val.color}} >
    
    
    </div>
  )
}

export default About