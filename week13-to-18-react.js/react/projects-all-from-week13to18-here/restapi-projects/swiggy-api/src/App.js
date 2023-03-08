import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Nav from   '../components/Nav'
import Error from '../components/Error'
import  About from '../components/About'
import Contact from '../components/Contact'
import Footer from  '../components/Footer'
import Body  from '../components/Body'
import Cart from '../components/Cart'
import Resmenu from '../components/Resmenu'



let App =() => 
{

  return(
    <React.Fragment> 
    <Nav/>
    <Outlet/>
    <Footer/>
    </React.Fragment>

)}


const route =createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      errorElement:<Error/>,
      children:[
        {

          path:'/',
          element:<Body/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },

        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/res/:id',
          element:<Resmenu/>
         
        },
      ]
   

    }
  ]
)



let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route} /> )


export default  App