import React, { Component } from 'react';
import Clock from './Clock.jsx';

class App extends Component {
    state = {
        visible: true
    }

    toggle = () => {
        this.setState({
            visible: false
        })
    }
    render() {
        return (
            <>
                <button onClick={this.toggle}>toggle</button>
                <div className="main">
                    {this.state.visible && <Clock location="New York" offset={0}/>}
                    {this.state.visible && <Clock location="Kiyv" offset={2}/>}
                    {this.state.visible && <Clock location="London" offset={-5}/>}
                </div>
                
                
                
            </>
        )
    }
    
}


export default App;