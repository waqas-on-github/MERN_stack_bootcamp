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

            <div style={{ height:'100vh',
                          background:this.state.mode==='light'?'#fff' :'#000'}} >
              {this.state.mode ==='light'?<button onClick={this.turndark}> dark mode </button> :<button onClick={this.turnlight} > light mode </button>}
            </div>
        )
    }
} 