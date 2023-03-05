import React, { useState } from 'react'
import { Button, Input } from 'antd'
function Hero(props) {

    let [val ,setval] =useState('')
   
 
  return (
<div className=" pt-[200px] " >
    
        <div className=" p-2 flex gap-5 "> 

           <Input  maxLength={10} className='w-[300px]' allowClear={true}  
           placeholder='Search food by name !'  type="text" 
           onChange={(e) => {
           setval(e.target.value)
           props.getquerey(e.target.value)
           }}  value={val}/> 
           
           <Button    type='primary' className='text-blue-900 border border-cyan-100'
           onClick={() => {
           props.getquerey(val)
           }} > Search  </Button>

        </div>
</div>
  )
}

export default Hero