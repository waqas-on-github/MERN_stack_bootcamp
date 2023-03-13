import React from "react";

 export default class ShowUser extends React.Component{

  render(){
    console.log(this.props);
  
     return(
        <div>

            <h1> name : {this.props.name}</h1>
            <h1> username : {this.props.username} </h1>
            <img  src={this.props.img}   alt="myimg"></img>
        </div>
     )


  }


 } 