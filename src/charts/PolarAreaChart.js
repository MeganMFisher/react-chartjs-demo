import React, {Component} from 'react';
import {PolarArea as PolarAreaChart} from 'react-chartjs';


export default class Polar extends Component {
    constructor() {
        super() 

        this.state = {
            data: [
                {
                    value: 300,
                    color:"#F7464A",
                    highlight: "#FF5A5E",
                    label: "Red"
                },
                {
                    value: 50,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Green"
                },
                {
                    value: 100,
                    color: "#FDB45C",
                    highlight: "#FFC870",
                    label: "Yellow"
                },
                {
                    value: 40,
                    color: "#949FB1",
                    highlight: "#A8B3C5",
                    label: "Grey"
                },
                {
                    value: 120,
                    color: "#4D5360",
                    highlight: "#616774",
                    label: "Dark Grey"
                }
            
            ]
        }
    }


    render() {
        return (
            <PolarAreaChart data={this.state.data} width={600}
            height={400}
            />
        )
    }
}