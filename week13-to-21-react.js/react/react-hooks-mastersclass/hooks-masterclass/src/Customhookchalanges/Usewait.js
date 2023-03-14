import { useEffect, useState } from "react"


const Usewait = () => {

const [timepassed ,settimepassed] =useState(false)



useEffect (()=> {
 
setInterval(() => {
   settimepassed(true) 
}, 3000);  





},[timepassed])



return timepassed

}


export default Usewait