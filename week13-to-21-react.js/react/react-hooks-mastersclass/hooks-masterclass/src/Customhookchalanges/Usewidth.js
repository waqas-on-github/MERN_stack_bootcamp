import { useEffect, useState } from "react"


let Usewidth  = () => {

    const [width ,setwidth] =useState(window.innerWidth)
    const [height ,setheight ] =useState(window.innerHeight)


  useEffect (() => {
    const listner =() => {
        setwidth(window.innerWidth)
        setheight(window.innerHeight)
    }

    window.addEventListener('resize' ,listner)


    return ()=>window.removeEventListener("resize" ,listner)
    

  })



return {width ,height}

}

export default Usewidth
