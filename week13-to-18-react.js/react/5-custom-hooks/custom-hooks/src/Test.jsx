import React, { useState } from 'react'

function Test() {
 let [user,setuser] =useState({
    name :'waqas',
    age :26
 })


  return (
    <div>
   <h1>{user.name}</h1>
   <button onClick={() => {
    setuser( {
        ...user,name:'imran'
    })
   }} > change name  </button>
   



    <h1>{user.age}</h1>{}
    <button  onClick={() => {
        setuser({
            ...user , age:29 
        })
    }}  >change age </button>
    </div>
  )
}

export default Test