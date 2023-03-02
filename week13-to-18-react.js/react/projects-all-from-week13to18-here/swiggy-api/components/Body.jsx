
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import  {Img ,Url} from'../const'



const Body=() => {

 let [res,setres] =useState()
 let [filtedres ,setfilterdres] =useState()
 let [inpval,setinpval] =useState('');

useEffect(() => {
  getdata() 
  console.log("render")
},[] )


function filterData(res, inpval) {
     let result = res?.filter((r) => (r?.data?.name?.includes(inpval)?r :null))
     setfilterdres(result)
     
   }
  

  async function getdata() {
    let data =await  fetch(Url)
    let json=await data.json()
    setres(json?.data?.cards[2]?.data?.data?.cards)
    setfilterdres(json?.data?.cards[2]?.data?.data?.cards)
    
  
 }

return(

  
  <div className='main' > 
        <div className="serachbar">
          <input type="text" placeholder='order food!' 
          value={inpval} onChange={(e)=>{setinpval(e.target.value)}}  />
          <button  onClick={()=>{filterData(res,inpval)}} > Order</button>
         </div>


          <div className="Cards">



             {filtedres?.map((r) => {   
              
             return(
               <Link to={'/res/' + r.data.id} className='card-item' key={r?.data?.uuid}> 
                     <img src={Img+r.data.cloudinaryImageId} />
                     <h3> {r.data.name}</h3>
                     
               </Link>


             )})} 
          </div>
  </div>
    )
}
export default Body