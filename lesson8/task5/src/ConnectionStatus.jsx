import React, { Component } from 'react';

class ConnectionStatus extends Component {
    state = {
        text: 'online',
        class: 'status'
    }


    componentDidMount() {
        window.addEventListener('offline', this.offline);
        window.addEventListener('online', this.online);
    }

    componentWillMount() {
        window.removeEventListener('offline', this.offline)
        window.removeEventListener('online', this.online)
    }

    offline = () => {
        this.setState({
            text: 'offline',
            class: 'status status_offline'
        })
    }

    online = () => {
        this.setState({
            text: 'online',
            class: 'status'
        })
    }

    render() {
        return <div className={`${this.state.class}`}>{this.state.text}</div>
    }
};

export default ConnectionStatus;