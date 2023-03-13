import React from 'react'

function Shimmer() {
  return (
    <div className='flex gap-10 w-[70%] flex-wrap items-center justify-center'   > {Array(15).fill('').map((item ,idx) => {
        return(
            <div  key={idx} className='  w-[250px] h-[250px]  bg-gray-300' > </div>
        )
    })  } </div>
  )
}

export default Shimmer