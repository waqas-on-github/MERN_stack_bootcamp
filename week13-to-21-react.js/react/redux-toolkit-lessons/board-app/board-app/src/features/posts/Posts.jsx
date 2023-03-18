import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectposts } from './postSlice'

function Posts() {
let posts =useSelector(selectposts)




  return (
    <div className=' flex items-center flex-col gap-10' >
      {posts?.map((item) => {
      return(
        <div key={item.id} className='border w-[400px] bg-slate-400 p-7 flex items-center flex-col gap-5' >
            <h2 className='text-lg font-bold' >{item.title}</h2>
            <p>{item.content}</p>

        </div>
      )

      })}

    </div>
  )
}

export default Posts