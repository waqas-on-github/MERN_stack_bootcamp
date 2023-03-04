import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Singleshimmer from './Singleshimmer'



function Dcard() {
    let [val ,setval] =useState(null)

    let {id}=useParams()
  async function Showcard (){
    let data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    data =await data.json()
    setval(data)
    console.log(data);
  }

useEffect(() => { 
    Showcard()
} ,[])
   if(!val) {
    return <Singleshimmer/>
   }
    return (
        <div className=' pt-[200px] items-center  flex flex-col justify-center'  >

           <img  className='pb-[30px] w-[400px]' src={val?.image} alt="" />
           <div className="  ">
             <p  className='text-black text-[18px] font-bold' > Name :{val?.name}</p>
             <p  className='text-black text-[18px] font-bold' > Location : {val?.location?.name}</p> 
             <p  className='text-black text-[18px] font-bold' >Gender:  {val?.gender}</p>
             <p  className='text-black text-[18px] font-bold' >Status : {val?.status}</p>
             <p  className='text-black text-[18px] font-bold' >Date : {val?.created.slice(0,10)}</p>
             </div>

        </div>
  )
}

export default Dcard