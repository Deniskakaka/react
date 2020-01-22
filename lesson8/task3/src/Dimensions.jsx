import React, { Component } from 'react';

class Dimensions extends Component {
    state = {
        widht: 0,
        height: 0
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize)
        const {innerWidth, innerHeight} = window;
        this.setDimensions(innerWidth, innerHeight);
    }

    componentWillUnMount() {
        window.removeEventListener('resize', this.onResize)
    }

    onResize = e => {
        const {innerWidth, innerHeight} = e.target;
        this.setDimensions(innerWidth, innerHeight);
    }

    setDimensions = (widht, height) => {
        this.setState({
            widht,
            height
        });
        document.title = `${this.state.widht}px - ${this.state.height}px`
    }
    render() {
        return  <div className="dimensions">
                    {`${this.state.widht}px - ${this.state.height}px`}
                </div>
    }
};

export default Dimensions;