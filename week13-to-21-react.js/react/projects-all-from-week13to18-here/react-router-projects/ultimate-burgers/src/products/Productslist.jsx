import React from 'react'
import { Navigate } from 'react-router-dom'
import { useProducts } from '../utils/useProducts'

function Productslist() {

const products  =useProducts()



if(!products) {
    return <h1> loading ...</h1>
}




return (
    
    <div>
    
        {products.map((item ) => {
            return(
                <div key={item.id} > 
                     <p>{item.name}</p>
                </div>
            )
        })}        
        
        </div>
  )
}

export default Productslist
