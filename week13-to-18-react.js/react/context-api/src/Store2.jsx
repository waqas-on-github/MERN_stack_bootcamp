import React, { useState } from 'react'
import anothercontext from './anothercontext'

function Store2(props) {
let [valx ,setvalx] =useState({
    color :"red"

})


  return (
    <anothercontext.Provider value={valx} >
    {props.children}
  </anothercontext.Provider>
  )
}

export default Store2   