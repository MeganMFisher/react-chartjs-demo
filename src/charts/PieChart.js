import React, {Component} from 'react';
import {Pie as PieChart} from 'react-chartjs';


export default class Pie extends Component {
    constructor() {
        super() 

        this.state = {
            data: [
                {
                    value: 300,
                    color: "#273996",
                    highlight: "#1555ea",
                    label: "blue"
                },
                {
                    value: 50,
                    color: "#949FB1",
                    highlight: "#A8B3C5",
                    label: "Grey"
                },
                {
                    value: 100,
                    color:"#d44e58",
                    highlight: "#FF5A5E",
                    label: "Red"
                },
                {
                    value: 40,
                    color: "#268793",
                    highlight: "#5AD3D1",
                    label: "Teal"
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
            <PieChart data={this.state.data}        width={600}
                height={400}
            />
        )
    }
}