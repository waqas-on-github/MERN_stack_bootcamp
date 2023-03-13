import React, { useState } from 'react'
import mycontext from './mycontext'

function Store(props) {
    let [val ,setval] =useState({
        name :"waqas" ,age:26 ,color: ""
    })



  return (
    <mycontext.Provider value={{val ,setval}} >
      {props.children}
    </mycontext.Provider>
  )
}

export default Store