import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Nav/Nav'

function App() {

  return (
    <div className="App-container">
      <div className="app">
        <Nav/>
        <Outlet/>
    </div>
    </div>
  )
}

export default App
