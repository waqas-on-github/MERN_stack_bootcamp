
import { CssBaseline } from '@mui/material'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {styles} from './components/Navbar/styles'

function App() {

  return (
    <div className="App">
      <CssBaseline/>
      <div   >

       <Navbar/>
      </div>

       <Outlet/>
    
    </div>
  )
}

export default App
