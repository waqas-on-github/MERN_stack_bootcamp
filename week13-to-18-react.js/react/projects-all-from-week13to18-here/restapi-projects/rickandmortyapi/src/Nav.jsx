import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div className='flex flex-wrap items-center justify-between  w-[60%] pt-[30px]' >
     <h1 className='font-bold tracking-wider  text-[25px] ' >Rick and <span className='text-blue-900' > Morty</span> </h1>
     <ul className='flex items-center flex-wrap justify-center gap-10' >

        <NavLink to='/'> Characters</NavLink>
        <NavLink to='/episodes' > Episodes </NavLink>
        <NavLink to='/location' > Location  </NavLink>

     </ul>

    </div>
  )
}

export default Nav