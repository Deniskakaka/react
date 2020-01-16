import React, { Component } from 'react';

class Colors extends Component {
    constructor(props) {
      super(props);

      this.state = {
        color: ''
      }
    }
    setTextColor = (colorText) => {
      this.setState({
        color: colorText,
      });
    }

    clearText = () => {
      this.setState({
        color: ''
      })
    }

    render () {
        return (
            <div>
            <div className="picker__title">
              {this.state.color}
            </div>
            <div>
              <button className="picker__button picker__button_coral"
               onMouseOver={this.setTextColor.bind(this,'Coral')}
               onMouseLeave = {this.clearText}
              ></button>
              <button className="picker__button picker__button_aqua"
                onMouseOver={this.setTextColor.bind(this,'Aqua')}
                onMouseLeave = {this.clearText}
              ></button>
              <button className="picker__button picker__button_bisque"
                onMouseOver={this.setTextColor.bind(this,'Bisque')}
                onMouseLeave = {this.clearText}
              ></button>
            </div>
          </div>
        )
    }
};

export default Colors;