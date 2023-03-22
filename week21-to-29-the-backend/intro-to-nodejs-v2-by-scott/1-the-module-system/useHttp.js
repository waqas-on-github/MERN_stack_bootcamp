// let get a taste of some module before creating our own   

import { request }  from "https" 
const respone = request("https://www.google.com/", (res) => {
    res.on("data" ,(chnuk) => {
        console.log("chuk is here " + chnuk)
    })
  
})

respone.end()



