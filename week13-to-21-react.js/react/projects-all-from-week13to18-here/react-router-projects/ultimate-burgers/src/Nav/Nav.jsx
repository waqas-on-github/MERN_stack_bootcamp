import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

export default function Nav() {
  return (
    <div  className=' pt-2 flex w-[200px] justify-between' >
      
    <NavLink 
      to='/'
      className={'text-[20px] font-extrabold '}
      > Products  
    </NavLink>    

    <NavLink
      to ='/admin'
      className={'text-[20px] font-extrabold '}
      > Admin
   </NavLink>

     

    </div>
  )
}
