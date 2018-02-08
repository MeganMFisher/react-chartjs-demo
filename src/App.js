import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Line from './charts/LineChart';
import Polar from './charts/PolarAreaChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-ChartJS Demo</h1>
        </header>
        Line Chart: <br/><br/>
        <Line/>
        <br/><br/>
        PolarArea Chart: <br/><br/>
        <Polar/>
      </div>
    );
  }
}

export default App;
