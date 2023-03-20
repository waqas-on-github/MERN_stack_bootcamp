import React from 'react'
import { Outlet } from 'react-router-dom'
import './products.css'


function Products() {
  return (
    <div  className='mb-4 w-[400px] flex items-center flex-col justify-between' >
       <div className=" w-[200px] mb-6">

          <img src="./img/logo.svg" alt="" />
       </div>
        <div className="self-start">

          <Outlet  />
        </div>

        
        </div>





  )
}

export default Products  