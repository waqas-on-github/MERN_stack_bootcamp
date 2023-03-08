import React from "react"



let Cards =(props) => {

 return(
    <React.Fragment> 
       <img src={props?.res?.data.img} alt="" />
    </React.Fragment>
 )

} 

export default Cards