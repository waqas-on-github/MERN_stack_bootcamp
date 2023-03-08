import React, { Component } from 'react';

import './App.css';
import Mycomponent from './Componentlifecycle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mycomponent/>
      </div>
    );
  }
}

export default App;
