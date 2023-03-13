import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Shimmer from './Shimmer'


function Showcatagory(props) {
  
    let [catg ,setcatg] =useState(null)

let pharms =useParams()

 async function getcatagory () {
    console.log(pharms.id)
    let data =await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+pharms.id)
    data =await  data.json() 
    setcatg(data)
   
 }


 useEffect(() => {
  getcatagory()
 },[])





 
  if(!catg) {
    return <Shimmer/>
  }
  return (
    <div className="   flex items-center justify-center">
    <div className='w-[80%] flex flex-wrap items-center justify-center gap-10 pt-[200px] ' >  
        {catg?.meals.map((item ) => {

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

export default Showcatagory