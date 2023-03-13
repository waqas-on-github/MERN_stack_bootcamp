import React from "react";
import PrTypes from 'prop-types'



export default  class Pt extends React.Component{


    constructor(props) {
        super(props)

        this.state={
            h:'haloo'
        }
    }
  

render() {
    return(
        <React.Fragment>
          <h1> name : {this.props.name } </h1>
          <h1>age :{this.props.age}</h1>
          <h1>{this.props.friendname} </h1>
        </React.Fragment>
    )
}


};

Pt.propTypes={
    
    name :PrTypes.string.isRequired,
    age:PrTypes.number,
};


Pt.defaultProps={
    friendname:'no one'
}

