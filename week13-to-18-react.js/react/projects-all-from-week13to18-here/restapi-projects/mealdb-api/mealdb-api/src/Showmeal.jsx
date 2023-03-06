import React from 'react'
import { Image } from 'antd';

import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';



function Showmeal(props) {

   const meal =props?.meal?.meals;
    if(props.err){

   
      return (
        <>
          <h1>{props.err}</h1>
        </>
       )
 

      
    }

    else if(!meal) {
      return <Shimmer/>
    }

 



 return (
    <div className=' meal flex items-center justify-center gap-10 flex-wrap  w-[100%]'> 
    
     {meal?.map((card) => {
      return(
        <div  className='flex flex-col flex-wrap  gap-[20px]  p-4 pb-6 border border-gray-300 ' key={card.idMeal} > 
          <Image width={250} src={card.strMealThumb} alt="" />
          <Link to={`/meal/${card.idMeal}`} className='flex justify-between p-4 pb-0'  >
            <p>{card.strMeal}</p>
            <p>{card.strArea}</p>
            
        </Link>
          </div>
      )
     }) }
    </div>
  )
}

export default Showmeal