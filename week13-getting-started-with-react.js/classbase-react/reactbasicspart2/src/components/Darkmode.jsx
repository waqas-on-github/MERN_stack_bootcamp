import React from "react";


export default  class  Darkmode extends React.Component{
   state={
    mode :'light'
   } 

   turndark=()=> {
    this.setState({mode:"dark"})
   }
   
   turnlight=() => {
    this.setState({mode:"light"})
   }

    render() {
        return(

            <React.Fragment>
              {}
            </React.Fragment>
        )
    }
} 