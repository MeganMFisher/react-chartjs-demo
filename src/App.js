import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Line from './charts/LineChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-ChartJS Demo</h1>
        </header>
        <Line/>
        <br/><br/>
        
      </div>
    );
  }
}

export default App;
