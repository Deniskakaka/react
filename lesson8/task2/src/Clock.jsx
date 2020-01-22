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
                date: this.props.offset
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    render() {
        return <div className="clock">
                    <span className="clock__location">{this.props.location}</span>
                    <span className="clock__time">{moment().utcOffset(this.state.date).format('h:mm:ss A')}</span>
                </div>
    }
};

export default Clock;