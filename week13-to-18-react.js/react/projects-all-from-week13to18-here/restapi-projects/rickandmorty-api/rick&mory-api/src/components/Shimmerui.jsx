

import React from 'react'

function Shimmerui() {
  return (
   <div> 

    {Array(10).fill('').map((e ,idx) => {
        return(
           <div key={idx} >
              <div className=" w-[300px] h-[300px] bg-gray-500 flex   align-middle "></div>
           </div>
        )
    })}
   </div>
  )
}

export default Shimmerui