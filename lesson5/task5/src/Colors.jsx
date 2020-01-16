import React, { Component } from 'react';

const RED= '#f00';

class Colors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text : 'Off'
        }
    }

    setBodyCOlor = (color, e) => { 
        if (e.target.textContent === 'On') {
            document.body.style.backgroundColor = '#ffffff'
        }  else{
            document.body.style.backgroundColor = color; 
        }
        this.changeText()
    }

   changeText = () => {
        this.setState({
            text: this.state.text === 'Off' ? 'On':'Off'
        })
    }



    render () {
        return (
            <div>
                <button className="toggler"
                    style={{backgroundColor:RED}}
                    onClick={this.setBodyCOlor.bind(this, RED)}
                >{this.state.text}</button>
            </div>
        )
    }
};

export default Colors;