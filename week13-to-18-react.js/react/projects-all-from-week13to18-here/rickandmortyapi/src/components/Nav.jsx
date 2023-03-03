import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
      <div className="">
      <h1>Rick an Morty <span>Wiki</span> </h1>

      <ul className='flex justify-aroud flex-wrap w-[50%]' >
    <li> <NavLink className=' ' style={{}}    to ="/Characters">Characters </NavLink></li>
    <li> <NavLink className=' '    to ="/Episodes">Episodes </NavLink></li>
    <li><NavLink  className=' '   to ="/Location">Location </NavLink></li>

      </ul>
      </div>
  )
}

export default Nav