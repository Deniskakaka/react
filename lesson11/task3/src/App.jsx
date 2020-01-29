import React from 'react';
import Expand from './Expand.jsx';

class App extends React.Component {
    state = {
        isOpen: false,
    }

    showText= () => {
        this.setState({
            isOpen: true
        })
    }

    hideText = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        const elements = (
            <div className="expand__content">
                <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing aclass.</p>
            </div>
        )
        return (
            <Expand title="Some title" isOpen={this.state.isOpen} show={this.showText} hide={this.hideText}>
                {!this.state.isOpen ? null : elements}
            </Expand>
        )
    }
};

export default App;