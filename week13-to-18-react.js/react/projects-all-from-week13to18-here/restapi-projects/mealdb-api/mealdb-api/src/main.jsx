import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import App from './App'
import Err from './Err'
import './index.css'
import Mealdetail from './Mealdetail'
import Nav from './Nav'
import Showbyingredent from './Showbyingredent'
import Showcatagory from './Showcatagory'



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
  errorElement:<Err/>
,
  children:[

       {
        path:'/',
        element:<App/>
    },

     

        {
            path:'/meal/:id',
            element:<Mealdetail/>
        },


        {
          path:'/catagory/showlist/:id',
          element:<Showcatagory/>
        }
        ,
        { 
          path:'/meal/ingredent/showing/:id',
          element: <Showbyingredent/>

        }

  ]
  }



])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
