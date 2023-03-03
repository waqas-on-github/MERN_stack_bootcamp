
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import App from './App'
import Characters from './components/Characters'
import Error from './components/Error'
import Location from './components/Location'
import Episodes from './components/Episodes'
import Nav from './components/Nav'




let Applayout =() => 
{


return(
  <React.Fragment> 
 <Nav/> 
  <Outlet/>
 
  </React.Fragment>

)}


const route =createBrowserRouter(
[
  {
    path:'/',
    element:<Applayout/>,
    errorElement:<Error/>,
    children:[
      {

        path:'/',
        element:<App/>
      },
      {
        path:'/Characters',
        element:<Characters/>
      },
      {
        path:'/Episodes',
        element:<Episodes/>
      },

      {
        path:'/Location',
        element:<Location/>
      },
    ]
 

  }
]
)



let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route} /> )


