import React from 'react';
import Numbers from './Numbers.jsx';
import EvenNumbers from './EvenNumbers.jsx';
import OddNumbers from './OddNumbers.jsx';

class App extends React.Component {
    state = {
        number: 0
    };

    componentDidMount() {
      this.interval = setInterval( () => {
            this.setState({
                number: this.state.number + 1
            });
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return(
            <div className="app">
                <Numbers title="All number" number={this.state.number}/>
                <EvenNumbers title="Even numbers" number={this.state.number}/>
                <OddNumbers title="Even numbers" number={this.state.number}/>
                <Numbers title="All number" number={17}/>
            </div>
        )
    }
};

export default App;