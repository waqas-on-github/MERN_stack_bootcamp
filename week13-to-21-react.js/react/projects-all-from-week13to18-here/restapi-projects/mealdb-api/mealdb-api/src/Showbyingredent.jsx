import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link }from 'react-router-dom'

function Showbyingredent() {

 let [val ,setval ] = useState(null)

    let phrams =useParams()
    console.log(phrams);


   async function Getbyingr() {
    let data = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" +  phrams?.id)
    data =await data.json()
    setval(data)
    console.log(data);

  }


  useEffect(() => {
    Getbyingr()
  },[])



    console.log(phrams);
  return (
    
    <div className="   flex items-center justify-center">
    <div className='w-[80%] flex flex-wrap items-center justify-center gap-10 pt-[200px] ' >  
        {val?.meals.map((item ) => {

            return(
                <Link to={`/meal/${item.idMeal}`}  key={item.idMeal} className="w-[300px]  gap-4 p-5 bg-slate-100 flex flex-col items-center ">
                    <img className='w-[250px]' src={item.strMealThumb} alt="" />
                    <h2 className='text-center' >{item.strMeal}</h2>
                </Link>
            )
        })}
    </div>
    </div>
  )
}

export default Showbyingredent