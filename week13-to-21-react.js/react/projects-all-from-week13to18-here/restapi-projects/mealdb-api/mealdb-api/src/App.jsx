import './App.css'
import { useEffect, useState } from 'react'
import Showmeal from './Showmeal'
import Serarch from './Serarch'
import Catagory from './Catagory'


function App() {
let [meal,setmeal]=useState(null)
let [search,setseach] =useState('')
let [error ,seterror] =useState(null)
let [catg , setcatg] =useState(null)


 async  function getmeal  () {
  try{
    let data =await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+search)
    data=await data.json()
    setmeal(data)
  }
  catch(err){
         seterror(err.message)
  }}


async function getcatagory () {
  let catagory =  await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  catagory =await catagory.json()
  setcatg(catagory)

}



useEffect(() => {
  getmeal()
  getcatagory()
 
} ,[search] )



function getquerey(txt){
  setseach(txt)
}



  return (
       <div className='flex flex-col items-center justify-center'   >
        
      
       
          <Serarch    getquerey={(txt) => getquerey(txt)} />
          <div className="flex gap-10 p-[150px]">
          <Catagory  data={catg} />
          <Showmeal  err ={error}  meal ={meal} />
          </div>
       </div>
  )
}

export default App

