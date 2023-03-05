import { Button } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Singleshimmer from './Singleshimmer';

function Mealdetail() {
    let pharms =useParams()
    let [meal ,setmeal] =useState(null)
    console.log(pharms.id);
  

   async function getmealbyid() {
        let data =await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+pharms.id)
        data=await data.json()
        setmeal(data)

    }
   
    useEffect(() => {
     getmealbyid()
    },[])
    
    
    
    
    console.log(meal)
    if(!meal) {
        return<Singleshimmer/>
    }
    return (
        <div className="flex items-center justify-center">
        <div className='flex gap-10 justify-center w-[500px] pt-[20px] mt-[10px] items-center flex-col bg-slate-100 '>

            <h1 className='text-[25px] font-bold' >{meal?.meals[0]?.strMeal}</h1>
           <img className='rounded-full w-[300px]' src={meal?.meals[0]?.strMealThumb} alt="" />
           <div className="flex justify-between  w-[70%]">
            <p className='text-[17px] font-bold' > Country :{meal?.meals[0]?.strArea}</p>
            <p className='text-[17px] font-bold' > Catagory:{meal?.meals[0]?.strCategory}</p>
           </div>
           <div className="w-[500px] h-[200px] overflow-y-scroll flex flex-col items-center ">
            <p className='p-10 bg-slate-100 text-justify text-gray-600 '>  {meal?.meals[0]?.strInstructions} </p>
           </div>

           <div className="flex items-center flex-col">
            <h1 className='text-[20px] font-bold tracking-widest ' >Ingredients</h1>
            <div className="flex items-center justify-center gap-[10px] flex-wrap p-[20px]">
    
            {meal?.meals[0]?.strIngredient1 && <Button> {meal?.meals[0]?.strIngredient1}</Button>}
            {meal?.meals[0]?.strIngredient2&& <Button> {meal?.meals[0]?.strIngredient2}</Button>}
            {meal?.meals[0]?.strIngredient3 && <Button> {meal?.meals[0]?.strIngredient3}</Button>}
            {meal?.meals[0]?.strIngredient4 && <Button> {meal?.meals[0]?.strIngredient4}</Button>}
            {meal?.meals[0]?.strIngredient5&& <Button> {meal?.meals[0]?.strIngredient5}</Button>}
            {meal?.meals[0]?.strIngredient6 && <Button> {meal?.meals[0]?.strIngredient6}</Button>}
            {meal?.meals[0]?.strIngredient7 && <Button> {meal?.meals[0]?.strIngredient7}</Button>}
            {meal?.meals[0]?.strIngredient8&& <Button> {meal?.meals[0]?.strIngredient8}</Button>}
            {meal?.meals[0]?.strIngredient9 && <Button> {meal?.meals[0]?.strIngredient9}</Button>}
            {meal?.meals[0]?.strIngredient10 && <Button> {meal?.meals[0]?.strIngredient10}</Button>}
            {meal?.meals[0]?.strIngredient11 && <Button> {meal?.meals[0]?.strIngredient11}</Button>}
            {meal?.meals[0]?.strIngredient12 && <Button> {meal?.meals[0]?.strIngredient12}</Button>}
            {meal?.meals[0]?.strIngredient13&& <Button> {meal?.meals[0]?.strIngredient13}</Button>}
            {meal?.meals[0]?.strIngredient14 && <Button> {meal?.meals[0]?.strIngredient14}</Button>}
            {meal?.meals[0]?.strIngredient15 && <Button> {meal?.meals[0]?.strIngredient15}</Button>}
            {meal?.meals[0]?.strIngredient16 && <Button> {meal?.meals[0]?.strIngredient16}</Button>}
            {meal?.meals[0]?.strIngredient17 && <Button> {meal?.meals[0]?.strIngredient16}</Button>}
            {meal?.meals[0]?.strIngredient18 && <Button> {meal?.meals[0]?.strIngredient17}</Button>}

            </div>
              <Button><a href={meal?.meals[0]?.strYoutube} target='_blank' > watch on youtube  </a></Button>

              
           </div>

        </div>
        </div>
        )
}

export default Mealdetail