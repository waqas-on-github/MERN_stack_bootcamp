import React from "react";
import Capatilise from "./Capatalise";


export default class Userauth extends React.Component{

   render() {
    console.log(this.props);

    return(
        <div>
           
           <h1> hello <Capatilise nameforcap={this.props.name} ></Capatilise> to dashboard </h1>
           
          {this.props.authed===true? <button  onClick={this.props.logout} > logout</button>:null}

        </div>
    )
   }

}