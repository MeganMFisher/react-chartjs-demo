import React, {Component} from 'react';
import {Line as LineChart} from 'react-chartjs';

export default class Line extends Component {
    constructor() {
        super() 

        this.state = {
            dataSet: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        pointHoverRadius: 5,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }
        }
    }


    render() {
        return (
            <LineChart data={this.state.dataSet} 	
                  width={400}
                  height={200}
            /> 
        )
    }

}