import React from "react";

 
export default class Eventargument extends  React.Component{

state={
    id:"2fcy77210$$"
}

 handleclick= (id, e) => {
    console.log(id, e);
 }


render() {

    return(
    <React.Fragment>

        <button  onClick={(e) => this.handleclick(this.state.id,e)}  >delete </button>
    </React.Fragment>)
}


}  