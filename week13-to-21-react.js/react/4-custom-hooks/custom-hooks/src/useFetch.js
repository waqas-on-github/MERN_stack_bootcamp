import { useEffect, useState } from "react"


const useFeth =(ulr ) => {

let [value ,setvale] =useState(null)

  async function getdata() {
    let data = await fetch(ulr)
    data = await data .json()
    setvale(data)
}


useEffect(() => {
 getdata()
},[])

return value

}


export default useFeth;