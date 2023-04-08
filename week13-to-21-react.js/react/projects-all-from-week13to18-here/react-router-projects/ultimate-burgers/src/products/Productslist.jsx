import React from 'react'
import { Navigate } from 'react-router-dom'
import { useProducts } from '../utils/useProducts'
import Product from './Product'

function Productslist() {

const products  =useProducts()



if(!products) {
    return <h1> loading ...</h1>
}




return (
    
    <div>
    
        {products.map((item ) => {
            return(
                <Product  product={item} key={item.id} /> 
            )
        })}        
        
        </div>
  )
}

export default Productslist
