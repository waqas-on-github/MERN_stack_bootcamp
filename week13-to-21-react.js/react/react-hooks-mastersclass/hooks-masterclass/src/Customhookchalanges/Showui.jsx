import React from 'react'
import Usewait from './Usewait'

function Showui() {

let timepass=Usewait()


  return (
    <div>{timepass?<p> showing ui </p> : ""}</div>
  )
}

export default Showui