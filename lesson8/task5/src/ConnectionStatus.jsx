import React, { Component } from 'react';

class ConnectionStatus extends Component {
    state = {
        text: 'online',
        online: true
    }


    componentDidMount() {
        window.addEventListener('offline', this.offline);
        window.addEventListener('online', this.online);
    }

    componentWillUnMount() {
        window.removeEventListener('offline', this.offline)
        window.removeEventListener('online', this.online)
    }

    offline = () => {
        this.setState({
            text: 'offline',
            online: false
        })
    }

    online = () => {
        this.setState({
            text: 'online',
            online: true
        })
    }

    render() {
        return <div className={ this.state.online ? 'status' : 'status status_offline'}>{this.state.text}</div>
    }
};

export default ConnectionStatus;