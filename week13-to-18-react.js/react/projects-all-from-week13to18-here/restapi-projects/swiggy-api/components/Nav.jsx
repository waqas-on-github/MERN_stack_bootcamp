import React from 'react'
import { Link } from 'react-router-dom'
let Nav =() => {

    return (
        <React.Fragment> 

         <li> <Link to='/'> Home </Link></li>
        <li> <Link to='/about'> About  </Link></li>
        <li> <Link to='/contact'> Contact </Link></li>
        <li> <Link to='/cart'> Cart </Link></li> 

                
        </React.Fragment>
    )
    
}

export default Nav