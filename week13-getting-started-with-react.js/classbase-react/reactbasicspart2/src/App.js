import React, { Component } from 'react';
import './App.css';
import Darkmode from './components/Darkmode';
import Showstate from './components/Showstate';
import Showstatepart2 from './components/Showstetepart2';
import Updatestate from './components/Updatestate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Showstate></Showstate>
        <Showstatepart2>  </Showstatepart2>
        <Updatestate> </Updatestate>

        <Darkmode></Darkmode>
      </div>
    );
  }
}

export default App;
