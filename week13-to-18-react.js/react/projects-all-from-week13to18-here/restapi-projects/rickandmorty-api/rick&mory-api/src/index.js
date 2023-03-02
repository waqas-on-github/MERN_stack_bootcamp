import React from 'react'
import { createRoot } from 'react-dom/client'
import Charactrs from './components/Charactrs'
import Nav from './components/Nav'

export const App = () => {
  return (
    <div className='flex flex-col justify-center items-center  gap-10 '>
   <Nav/>
   <Charactrs/>

    </div>
  )
}

const root = createRoot(document.getElementById('app'))

root.render(<App />)
