import React from 'react';
import Counter from './Counter.jsx';

const App = () => {
    return (
        <>
        <Counter city ={'London'} offset={0}/>
        <Counter city ={'Kiyv'} offset={2}/>
        <Counter city ={'New York'} offset={-5}/>
        </>
    );
};

export default App;