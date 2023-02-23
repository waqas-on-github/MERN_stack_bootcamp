import React, { Component } from 'react';
import './App.css';
  // jsx , components ,functional components ,components compisition

let heading1 =React.createElement("h1",{
  id:"heading1"
} ,"Hello heding 1")

let heading2=<h1>hello world</h1>    // jsx easy way to create react element ist not html but html 
// like syntex

// we can include javascript inside jsx also


let containet=(
  <div> {2+2}</div>
)
// inside curly braces we can write javascript 



// whats is functional  Component(a simple function which returns some jsx)

function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
    </div>
  );
}

 let Footer=()=>(
  <div>
    <h1>Footer</h1>
  </div>
 )



class App extends Component {
  render() {
    return (
      <div>
   {/* we can write any valid javascript inside jsx  */}
   {'hello world'}
   { console.log("hello")}
     
    {heading2}
    {containet}
   {/* here how we can compose compoents  */}
    <Navbar />   
    {/* we can also do this but ist less used */}
    {Footer()} 



      </div>
    );
  }
}

export default App;
