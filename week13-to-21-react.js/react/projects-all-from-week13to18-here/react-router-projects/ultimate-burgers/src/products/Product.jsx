import React from 'react'

function Product(props) {

    const { id, name, description, price } = props.product;
     
return (
<div className=' hover:outline flex items-center  bg-gray-700  p-5  m-5   justify-center ' >


     <img  className='w-[50px]' src={`./img/products/${id}.svg`}alt="tehre was image " />

      <div className='flex  w-[150px] flex-col items-center justify-center ' >
           <p>{name} </p>
           <p>{price}</p>
      </div>


</div>
  )
}

export default Product