import React, { Component } from 'react';
import './App.css';
import HelloComponent from './components/HelloComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HelloComponent />
      </div>
    );
  }
}

export default App;
