import React from 'react';
import Expand from './Expand.jsx';

const App = () => {
        const elements = (
            <div className="expand__content">
                <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing aclass.</p>
            </div>
        )
        return (
            <Expand title="Some title">
                {elements}
            </Expand>
        )
};

export default App;