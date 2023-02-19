import React from "react";



export default  class Showstate extends React.Component {
   
    constructor(props){
        super(props);

        this.state={
            name :"waqas",
            age :17,
        }
    }
   

    render() {
        return (
            <React.Fragment> 
                 <h1> hi my name is {this.state.name}   </h1>
                 {this.state.age >18?<h2> ready to marry </h2> : <h2> you are kid now </h2> }
            </React.Fragment>
        )
    }
}