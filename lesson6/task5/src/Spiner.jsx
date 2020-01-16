import React from 'react';

const Spiner = (props) => {
    let size = {padding: `${props.size}px` }
    return <span className="spinner" style={size}></span>
};

export default Spiner;