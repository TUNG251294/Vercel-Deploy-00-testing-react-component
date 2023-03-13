import './App.css';

import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ClickCount: 0
    };
    this.ClickMe = this.ClickMe.bind(this);
  }

  ClickMe() {
    this.setState({
      ClickCount: this.state.ClickCount + 1
    });
  }

  render() {
    return (
      <div className='App'>
        <button id="ClickMe" className="click-me" onClick={this.ClickMe}>
          Click Me
        </button>
        <p>You clicked me :: {this.state.ClickCount}</p>
      </div>
    );
  }
}

export default App;