import React, { Component } from 'react';
import moment from 'moment'

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: props.location,
            date: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: moment().utcOffset(this.props.offset).format('h:mm:ss A')
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    render() {
        return <div className="clock">
                    <span className="clock__location">{this.state.city}</span>
                    <span className="clock__time">{this.state.date}</span>
                </div>
    }
};

export default Clock;