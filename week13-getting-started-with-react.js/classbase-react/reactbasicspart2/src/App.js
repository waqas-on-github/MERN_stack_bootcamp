import React, { Component } from 'react';
import './App.css';
import Darkmode from './components/Darkmode';
import Eventargument from './components/Eventargument';
import Pt from './components/Pt';
import Showstate from './components/Showstate';
import Showstatepart2 from './components/Showstetepart2';
import Updatestate from './components/Updatestate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Showstate/>
        <Showstatepart2/> 
        <Updatestate/> 
        <Darkmode/>
        <Pt  name='waqas' age={26} ></Pt>
        <Eventargument/>
        

      </div>
    );
  }
}

export default App;
