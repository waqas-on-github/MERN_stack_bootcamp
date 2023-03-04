
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import App from './App'
import Dcard from './components/Dcard'
import Episodes from './components/Episodes'
import Errorx from './components/Errorx'
import Location from './components/Location'
import Nav from './Nav'


const Applayout =()=> {
    return(
        <React.Fragment>
            <Nav/>
            <Outlet/>
        </React.Fragment>
    )
}

let router =createBrowserRouter([
    {
  path:'/',
  element:<Applayout/>,
  errorElement:<Errorx/>
,
  children:[
    
       { 
        path:'/',
        element:<App/>
    },

        {
            path:'/episodes'
        ,element:<Episodes/>
    },

         {
            path:'/location'
         ,element:<Location/>
        },

        {
            path:'/card/:id',
            element:<Dcard/>
        }
       
  ]
  }



])






let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} /> )


