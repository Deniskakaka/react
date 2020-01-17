import React from 'react';

const Spiner = (props) => {
    let size = {width: `${props.size}px`, height: `${props.size}px`}
    return <span className="spinner" style={size}></span>
};

export default Spiner;