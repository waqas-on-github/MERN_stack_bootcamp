import React, { Component } from 'react'

export default class child2 extends Component {

constructor(props){
    super(props)
    console.log("child2 constructor called ")
   this.state={

   } 
}





 componentDidMount() {
    console.log('child2 component didmount called ');
 }


 componentDidUpdate() {
    console.log("child2 component didupdate called ")
 }

  render() {
      {console.log('child2 render called')}
    return (
      <div>Child1</div>
    )
  }
}
