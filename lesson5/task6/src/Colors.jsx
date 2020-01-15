import React, { Component } from 'react';

class Colors extends Component {

    setTextColor = (e) => {
        if (e.target.className === 'picker__button picker__button_coral') {
            document.querySelector('.picker__title').textContent = 'Coral'
        }
        if (e.target.className === 'picker__button picker__button_aqua') {
            document.querySelector('.picker__title').textContent = 'Aqua'
        }
        if (e.target.className === 'picker__button picker__button_bisque') {
            document.querySelector('.picker__title').textContent = 'Bisque'
        }
    }

    render () {
        return (
            <div>
            <div className="picker__title">
              
            </div>
            <div>
              <button className="picker__button picker__button_coral"
               onMouseOver={this.setTextColor.bind(this)}
              ></button>
              <button className="picker__button picker__button_aqua"
                onMouseOver={this.setTextColor.bind(this)}
              ></button>
              <button className="picker__button picker__button_bisque"
                onMouseOver={this.setTextColor.bind(this)}
              ></button>
            </div>
          </div>
        )
    }
};

export default Colors;