import React from "react"
import ReactDOM from 'react-dom/client'




console.log(React)
console.log(ReactDOM)

//using javascript 
//  let heading =document.createElement("h1")
//  heading.innerHTML = "hello react" 
//  let root=document.getElementById("root")   
//  root.appendChild(heading)


// // using react
let heading1 =React.createElement("h1",{
    id:"heading1"
} ,"Hello heding 1")


let heading2 =React.createElement("h1",{
    id:"heading1"
} ,"Hello heading 2!")


let contaner =React.createElement("div",{
    id:"container"
} ,[heading1,heading2])




let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(contaner)


//whats heading and root is 
console.log(contaner);
console.log(root);




