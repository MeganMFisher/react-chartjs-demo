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
                        fillColor: "rgba(46, 70, 127, 0.2)",
                        strokeColor: "rgba(46, 70, 127, 0.2)",
                        pointColor: "rgba(46, 70, 127, 0.2)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(46, 70, 127, 0.2)",
                        pointHoverRadius: 5,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            }
        }
    }


    render() {
        return (
            <LineChart data={this.state.dataSet} 	
                  width={600}
                  height={400}
            /> 
        )
    }

}