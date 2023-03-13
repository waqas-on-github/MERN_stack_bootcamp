import React from "react";

// exporting component and extending to react.component 
export default  class Mycomp extends React.Component
 {

     render()   // responsible for displaying ui 
   {
    console.log(this);   // will tell me all properties of  this components 

    return (
        <div>
        {/* jsx  is just html mixed with javascript also called javascript xml */}
         <h1>  hello {this.props.fname} {this.props.lname} </h1>     
        
        </div>
    )
   }
 }
