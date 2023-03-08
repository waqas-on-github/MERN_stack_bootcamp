import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Img ,menueUrl} from '../const'

function Resmenu() {
  let pharms =useParams()
  let [res,setres] =useState()


   const  getMenue= async  ()=> {
   let data=  await fetch( menueUrl+ pharms.id)
   data =await data.json()
  setres(data?data:null)  

 
  } 

useEffect(() =>{ getMenue() },[])

   if(!res) {
    return(
      <h1> lodaing... </h1>
    ) 
   }
   else{
    return (
    <div className='menue-card'>
      <div className="image-menue">
       <img src={Img+res?.data?.cloudinaryImageId} alt="ha" />  
       <h3>{res?.data?.name}</h3> 
       </div>
      <ul className='menue' >
      <h1 >Menue </h1>
      {Object.values(res?.data?.menu?.items).map((element) => {
        return(
          <li key={element.id}>{element.name}</li>
        )
      })}

     </ul>
    </div>
  )
}}

export default Resmenu