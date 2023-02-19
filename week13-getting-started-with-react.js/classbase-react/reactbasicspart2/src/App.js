import React, { Component } from 'react';
import './App.css';
import Showstate from './components/Showstate';
import Showstatepart2 from './components/Showstetepart2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Showstate></Showstate>
        <Showstatepart2>  </Showstatepart2>
      </div>
    );
  }
}

export default App;
