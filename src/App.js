import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Line from './charts/LineChart';
import Polar from './charts/PolarAreaChart';
import Bar from './charts/BarChart';
import Pie from './charts/PieChart';
import Doughnut from './charts/DoughnutChart';
import Radar from './charts/RadarChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-ChartJS Demo</h1>
        </header>
        Bar Chart: <br/><br/>
        <Bar/>
        <br/><br/>
        Line Chart: <br/><br/>
        <Line/>
        <br/><br/>
        PolarArea Chart: <br/><br/>
        <Polar/>
        <br/><br/>
        Pie Chart: <br/><br/>
        <Pie/>
        <br/><br/>
        Doughnut Chart: <br/><br/>
        <Doughnut/>
        <br/><br/>
        Radar Chart: <br/><br/>
        <Radar/>
        <br/><br/>
      </div>
    );
  }
}

export default App;
