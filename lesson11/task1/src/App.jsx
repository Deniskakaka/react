import React from 'react';
import Numbers from './Numbers.jsx';
import EvenNumbers from './EvenNumbers.jsx';
import OddNumbers from './OddNumbers.jsx';

class App extends React.Component {
    state = {
        number: 0
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
          this.setState((state) => ({ number: state.number + 1 }));
        }, 1000);
    }

    render() {
        return(
            <div className="app">
                <OddNumbers number={this.state.number} />
                <EvenNumbers number={this.state.number} />
                <Numbers title={'All numbers'} number={this.state.number} />
                <Numbers title={'Just 17'} number={17} />
            </div>
        )
    }
};

export default App;