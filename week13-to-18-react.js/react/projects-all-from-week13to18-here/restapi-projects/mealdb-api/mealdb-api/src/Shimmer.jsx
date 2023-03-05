import React from 'react'
import { Spin } from 'antd';

function Shimmer() {
  return (
    <div className='flex gap-10 w-[70%] flex-wrap items-center justify-center'   > {Array(15).fill('').map((item ,idx) => {
        return(
            <div  key={idx} className=' flex items-center justify-center  w-[250px] h-[250px]  bg-gray-300' > 
             <Spin size='large' /></div>
        )
    })  } </div>
  )
}

export default Shimmer








