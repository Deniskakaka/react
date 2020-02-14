import React, { useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
    const [visible, setVisible] = useState(true);

    return (
               <>
                    <button onClick={() => setVisible(visible ? false : true)}>toggle</button>
                    <div className="main">
                        {visible && <Clock location="New York" offset={0}/>}
                        {visible && <Clock location="Kiyv" offset={2}/>}
                        {visible && <Clock location="London" offset={-5}/>}
                    </div>
               </>  
    );
}

export default App;