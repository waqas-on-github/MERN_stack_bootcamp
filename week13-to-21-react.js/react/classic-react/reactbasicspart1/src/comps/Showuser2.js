import React from "react";
// objects as props 

 export  default  class  ShowUser2 extends React.Component{

  render(){
    console.log(this);

   return(
    <div> 
        <h1> objects as props </h1>
  <h1> name : {this.props.userinfo.name}</h1>
            <h1> username : {this.props.userinfo.username} </h1>
            <img  src={this.props.userinfo.img}   alt="myimg"></img>

    </div>
   )

  }
   

 }