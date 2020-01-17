import React from 'react';

const NumbersList = (props) => {
    return <ul>{props.numbers.map( num => (
                <li key={num}>{num}</li>
            ))}</ul>
};

export default NumbersList;