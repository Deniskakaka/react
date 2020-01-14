import React, { Component } from 'react';
import moment from "moment";
import './counter.scss';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: props.city,
            date: 0
        }

        setInterval(() => {
            this.setState({
                date: moment().utcOffset(props.offset).format('h:mm:ss A')
            });
        },1000)
    }

   

    render() {
        return <div className="clock">
                <span className="clock__location">{this.state.city}</span>
                <span className="clock__time">{this.state.date}</span>
               </div>
    }
}

export default Counter;