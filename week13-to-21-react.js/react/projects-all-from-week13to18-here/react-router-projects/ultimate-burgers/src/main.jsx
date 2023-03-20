import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Admin from './admin/Admin'
import App from './App'
import './index.css'
import Products from './products/Products'
import Productslist from './products/Productslist'


const router =createBrowserRouter([
  
  {
    path:'/',
    element:<App/>,
    errorElement: <Navigate to='/' />,
    children:[
      {
        path:'/',
        element:<Products/>,
        children:[
          { 
            path:'/',
            element:<Productslist/>
            }
        ]
      }
,       {
           path:'/admin',
           element:<Admin/>
}

    ]
  }


])









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
