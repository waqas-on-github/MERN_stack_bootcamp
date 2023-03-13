import React, { useState } from 'react'
import "./state.css"

function Lightdarkmode() {

    const [isdark ,setisdark] =useState(false)

  return (
    <div className={`${isdark?"dark" : "light"} wd `} >
        <h1>challange 1 dark mode light mod toggler</h1>
        
        {isdark===false?<button onClick={()=> {
            setisdark(!isdark)
        }} >turndark</button>:<button onClick={() => {
            setisdark(!isdark)
        }} >turnlight</button>}

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quia fugit similique nemo, non doloribus voluptatem ullam autem beatae rem ea eius! Pariatur blanditiis modi vero, omnis numquam ex veritatis?    </p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quia fugit similique nemo, non doloribus voluptatem ullam autem beatae rem ea eius! Pariatur blanditiis modi vero, omnis numquam ex veritatis?    </p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quia fugit similique nemo, non doloribus voluptatem ullam autem beatae rem ea eius! Pariatur blanditiis modi vero, omnis numquam ex veritatis?    </p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quia fugit similique nemo, non doloribus voluptatem ullam autem beatae rem ea eius! Pariatur blanditiis modi vero, omnis numquam ex veritatis?    </p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quia fugit similique nemo, non doloribus voluptatem ullam autem beatae rem ea eius! Pariatur blanditiis modi vero, omnis numquam ex veritatis?    </p>

    </div>
  )
}

export default Lightdarkmode;