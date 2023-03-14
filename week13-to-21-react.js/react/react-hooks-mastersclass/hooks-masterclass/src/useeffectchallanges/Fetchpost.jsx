import React, { useState,useEffect } from 'react'

function Fetchpost() {
const [nextpost ,setnextpost] =useState(1)
const [geterr ,seterr] =useState()
const [data,setdata] =useState(null)

const url=`https://jsonplaceholder.typicode.com/posts/${nextpost}`

useEffect(() => {
  
 async function getpost () {
    try{
    let data =await fetch(url)
    data = await data.json();

    setdata(data)
    }
    catch (err) {
        seterr(err)
    }
    

 } 
 

getpost()

}, [nextpost ,url])






  return (
    <div>
        <h1>fetch post challange </h1>
       <h2>{data?.title}</h2>
       <p>{data?.body}</p>
       <button onClick={() => {
        setnextpost(per=> per +1)
       }} > next</button>
         
    </div>
  )
}

export default Fetchpost