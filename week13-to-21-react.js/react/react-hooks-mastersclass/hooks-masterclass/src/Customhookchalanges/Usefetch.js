import { useState,useEffect } from "react"



const Usefetch =() => {


    const [nextpost ,setnextpost] =useState(1)
    const [pervpost ,setprevpost] =useState()
    const [geterr ,seterr] =useState()
    const [data,setdata] =useState(null)
    
    const url=`https://jsonplaceholder.typicode.com/posts/${nextpost}`
    
    useEffect(() => {
      
     async function getpost () {
        try{
        let data =await fetch(url)
        data = await data.json();
    
        setdata(data)
        }
        catch (err) {
            seterr(err)
        }
        
    
     } 
     
    
    getpost()
    
    }, [nextpost ,url])
    
    
    return {nextpost,geterr ,pervpost ,data ,setnextpost , setprevpost}
    

}

export default Usefetch