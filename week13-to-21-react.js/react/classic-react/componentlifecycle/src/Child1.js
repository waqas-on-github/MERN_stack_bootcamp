import React, { Component } from 'react'

export default class Child1 extends Component {

constructor(props){
    super(props)
    console.log("child1 constructor called ")
   this.state={
     
   } 
}


async componentDidMount() {
    
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data = await data.json()
    this.setState(data)
    console.log(data)
    console.log('child1 component didmount called ');
}


 componentDidUpdate() {
    console.log("child1 component didupdate called ")
 }

  render() {
      {console.log('child1 render called')}
    return (
      <div>Child1</div>
    )
  }
}
