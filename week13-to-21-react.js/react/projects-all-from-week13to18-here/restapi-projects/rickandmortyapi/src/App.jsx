import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'
import Pagenation from './components/Pagenation'
import Search from './components/Search'


function App() {
let [pagenum ,setpagenum] =useState(1)
let [char,setchar] =useState(null)
let [querey,setquerey] =useState('')


async function Getdata() {
  let data =await fetch(`https://rickandmortyapi.com/api/character/?page=${pagenum}&name=${querey}`)
  data=await data.json() 
  setchar(data)
}

useEffect(()=>{
  Getdata()
  console.log(char);
},[pagenum,querey] )

let getval =(val) => {
  setquerey(val)
   setpagenum(1)
} 

function getpagenum(pagenum) {
   setpagenum(pagenum)
   
}



  return (
  <div className="flex  p-6 justify-center items-center flex-col">
    <Search setval={(x)=>getval(x)} />
     <Cards results ={char?.results} />
   <div className='flex gap-5'>
     <Pagenation info={char?.info}  changepage={(page) => {getpagenum(page)}} />
 
   </div>
  </div>
  )
}

export default App