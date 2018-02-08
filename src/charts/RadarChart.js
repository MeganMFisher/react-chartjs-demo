import React, {Component} from 'react';
import {Radar as RadarChart} from 'react-chartjs';


export default class Radar extends Component {
    constructor() {
        super() 

        this.state = {
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(46, 70, 127, 0.5)",
                        strokeColor: "rgba(46, 70, 127, 0.8)",
                        highlightFill: "rgba(46, 70, 127, 0.2)",
                        highlightStroke: "rgba(46, 70, 127, 0.2)",
                        
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(151,187,205,0.5)",
                        strokeColor: "rgba(151,187,205,0.8)",
                        highlightFill: "rgba(151,187,205,0.75)",
                        highlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            }
        }
    }


    render() {
        return (
            <RadarChart data={this.state.data}            width={600}
                height={400}
            />
        )
    }
}