import { useEffect, useState } from "react"


export const useProducts = () => {

    let [product ,setproduct] =useState(null)

    const [err ,seterr] =useState(null)

    

    useEffect(() => {
     getproduct()

    },[])
     

     async function getproduct () {

        try{
            let data = await fetch("http://localhost:3000/products")
            data =await data.json() 
            setproduct(data)
        }
        catch(err) {
            seterr(err)
        }
      

     }


   return product
}