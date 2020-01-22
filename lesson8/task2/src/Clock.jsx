import React, { Component } from 'react';
import moment from 'moment'

let formatTime = date => moment().utcOffset(date).format('h:mm:ss A')

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: formatTime(this.props.offset)
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    render() {
        return <div className="clock">
                    <span className="clock__location">{this.props.location}</span>
                    <span className="clock__time">{this.state.date}</span>
                </div>
    }
};

export default Clock;