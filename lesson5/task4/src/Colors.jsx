import React, { Component } from 'react';

const RED= '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
    setBodyCOlor = color => {
        document.body.style.backgroundColor = color;
    }

    render () {
        return (
            <div className="colors">
                <button className="colors__button"
                    style={{backgroundColor:RED}}
                    onClick={this.setBodyCOlor.bind(this, RED)}
                ></button>
                <button className="colors__button"
                     style={{backgroundColor:GREEN}}
                     onClick={this.setBodyCOlor(GREEN)}
                ></button>
                <button className="colors__button"
                    style={{backgroundColor:BLUE}}
                    onClick={ this.setBodyCOlor(BLUE)}
                ></button>
            </div>
        )
    }
};

export default Colors;