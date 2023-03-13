import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Store from './Store'
import Store2 from './Store2'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Store2>
   
    <Store>

      <App/>
    </Store>
      
   
    </Store2>
  </React.StrictMode>
)
