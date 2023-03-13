import React from 'react'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'

function Cards(props) {
   if(!props.results) {
    return<Shimmer/>
   }
  return (
  <div className="flex justify-center gap-[30px] text-center  flex-wrap w-[60%]" > 

   {props?.results?.map((card) => {
    return(
        <Link  to={`/card/${card.id}`} key={card.id}  className="   p-[10px] border border-black w-[250px] flex  flex-col items-center justify-center"> 
      <img className='w-[250px]' src={card?.image} alt="" />
      <p>{card.name}</p> 
      <p>{card?.location?.name}</p>
      <h2>{card?.status}</h2>
      
    </Link>
    )
   })}
   
  </div>
  )
}

export default Cards