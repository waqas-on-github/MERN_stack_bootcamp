import './App.css'
import { useEffect, useState } from 'react'
import Showmeal from './Showmeal'
import Serarch from './Serarch'




function App() {
let [meal,setmeal]=useState(null)
let [search,setseach] =useState('')
let [error ,seterror] =useState(null)


 async  function getmeal  () {
  try{
    let data =await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+search)
    data=await data.json()
    setmeal(data)
    

  }
  catch(err){
         seterror(err.message)
  }
  

}

useEffect(() => {
  getmeal()
} ,[search] )

function getquerey(txt){
  setseach(txt)
}



  return (
       <div  className='flex items-center justify-center flex-col gap-[100px]'  >
        
      
       
          <Serarch getquerey={(txt) => getquerey(txt)} />
          <Showmeal  err ={error}  meal ={meal} />
       </div>
  )
}

export default App

