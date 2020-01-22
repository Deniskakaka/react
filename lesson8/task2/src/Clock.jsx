import React, { Component } from 'react';
import moment from 'moment'


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
                date: new Date()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    render() {
        const time = moment(this.state.date).utcOffset(this.props.offset).format('h:mm:ss A')
        return <div className="clock">
                    <span className="clock__location">{this.props.location}</span>
                    <span className="clock__time">{time}</span>
                </div>
    }
};

export default Clock;