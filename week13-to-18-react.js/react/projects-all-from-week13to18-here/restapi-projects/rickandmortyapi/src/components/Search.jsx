import React, { useState } from 'react'

function Search(props) {
  let [val,setval] =useState('')


  return (
      <div className=" p-[20px]  m-7  flex gap-10  ">

      <input  value={val} onChange={(e) => {
        setval(e.target.value)
        props.setval(e.target.value)
      }}  className='focus:outline-none border pl-6 pt-3 pb-3'  placeholder='search here ' type="text" />
      <button  onClick={() => {
       props.setval(val)
       
      }}  className='bg-green-600  rounded pt-3 pb-3 pl-6 pr-6 text-white font-bold '  > Search</button>


      </div>
  )
}

export default Search