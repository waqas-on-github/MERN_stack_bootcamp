import React from "react";


export default class Capatilise extends React.Component{


    render() {
        console.log(typeof(this.props.nameforcap));

     return(
        <React.Fragment> 
   

               <span>{this.props.nameforcap.toUpperCase()} </span>
                

        </React.Fragment>
     )

    }
}