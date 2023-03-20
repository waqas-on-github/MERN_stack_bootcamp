import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Actors from './components/Actors/Actors'
import Movieinformation from './components/movieinformation/Movieinformation'
import Movies from './components/movies/Movies'
import './index.css'




const routes =createBrowserRouter([


  {
    path:'/',
    element:<App/>,
    errorElement:<h1> got an error </h1>,
    children:[
      {
        path:'/' ,
        element:<Movies/>
      },
      {
        path:'/moviinformation/:id',
        element:<Movieinformation/>
      },
      {
       path:'/actors/:id' ,
       element:<Actors/>

      }

    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    
    <RouterProvider router={routes}/>

) 