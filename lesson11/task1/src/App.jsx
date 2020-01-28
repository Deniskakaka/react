import React from 'react';
import Numbers from './Numbers.jsx';
import EvenNumbers from './EvenNumbers.jsx';
import OddNumbers from './OddNumbers.jsx';

class App extends React.Component {
    state = {
        number: 0
    };

    render() {
        return(
            <div className="app">
                <Numbers  number={17}/>
            </div>
        )
    }
};

export default App;