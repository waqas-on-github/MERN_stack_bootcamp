import React, { useEffect, useState } from 'react'
import Shimmerui from './Shimmerui'

function Charactrs() {
let [char,setchar]=useState(null)
let [val,setval ]=useState('')

 async function Getdata () {
    let data =await fetch("https://rickandmortyapi.com/api/character")
    data= await data.json() 
    setchar(data)
}




useEffect(() => {
  Getdata()
} ,[])
   const main=" flex flex-col items-center justify-center gap-10 p-[50px] border  border-red-900"
   const btncss="h-50px border w-[100px] bg-green-600  text-white"
  return !char? <Shimmerui/> : (
  
    <div className= {main}>
    <div className="flex gap-10">
      <input onChange={(e)=>{
        setval(e.target.value)
      }} className='focus:outline-none h-[50px] border' type="text" placeholder='search here' value={val} />
      <button  className={btncss} type="submit">Search </button>
    </div>

    <div className='flex items-center  justify-center  flex-wrap  gap-10   w-[80%]' > 
       
 {console.log(char.results)}
 {char.results.map  ((ch ,index) => {
    return(
        <div className='border border-red-100' key={index}> 
            {console.log(ch)}
             <img className='w-[300px]' src={ch.image} alt="" />
            <h1> {ch.name }</h1>
        </div>
    )
  })}
       
    </div>

  </div>
  )
}

export default Charactrs