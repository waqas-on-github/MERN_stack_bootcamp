import React from "react";


export default class Showstatepart2 extends React.Component{

  state ={
    name :"imran",
    age :28
  }

    

    render() {
        return(
            <React.Fragment> 
                <h1> state part 2 </h1>
                <h1>  name {this.state.name}</h1>
                {this.state.age>18?<h1> ready to marry</h1>: <h1>  you are kid now </h1>}
                  
            </React.Fragment>
        )
    }


}