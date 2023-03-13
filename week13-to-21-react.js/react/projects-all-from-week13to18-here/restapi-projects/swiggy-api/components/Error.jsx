import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
 let err =useRouteError()
  return (
    <div>  {err.status}  {err.statusText} </div>
  )
}


export default Error