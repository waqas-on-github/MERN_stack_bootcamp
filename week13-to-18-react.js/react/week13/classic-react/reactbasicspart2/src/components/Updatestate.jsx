import React from "react";

export default class Updatestate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
  }
  
    incrementsnumber = () => {
      this.setState({ num: this.state.num + 1 });
    };
  
  render() {
    return (
      <React.Fragment>
        <p>{this.state.num}</p>
        <button onClick={this.incrementsnumber}>increment</button>
      </React.Fragment>
    );
  }
}
