import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar,  IconButton,Toolbar,Drawer,Button,Avatar } from '@mui/material'
import {styles} from './styles'

function Navbar() {
  return (
   

        <AppBar sx={styles.bgcolor} >
         <Link to ='/'> Movies </Link>
         <Link  to={`/moviinformation/${10}`} >movie Information </Link>
         <Link  to={`/actors/${11}`} >Actors</Link>

         </AppBar>

    
  )
}

export default Navbar 