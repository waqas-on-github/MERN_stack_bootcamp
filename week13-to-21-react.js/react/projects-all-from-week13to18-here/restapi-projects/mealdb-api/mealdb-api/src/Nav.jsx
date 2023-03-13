import { Button } from 'antd'
import React from 'react'
import {Link }from 'react-router-dom'


function Nav() {
  return (
    <div className="">
      <Link   className='text-blue-500 hover:text-blue-900 hover:border border-blue-800 '  to='/'> Home  </Link>
       
    </div>
  )
}

export default Nav