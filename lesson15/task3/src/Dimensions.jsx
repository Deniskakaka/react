import React, { Component, useEffect, useState } from 'react';

const Dimensions = () => {
    const [demensions, setDimensions] = useState({
        widht: 0,
        height: 0
    });

    useEffect(() => {
        const {innerWidth, innerHeight} = window;
        setDimensions({width: innerWidth, height: innerHeight});
        const handleResize = (e) => {
            const { innerHeight, innerWidth } = e.target;
            setDimensions({width: innerWidth, height: innerHeight});
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    const  { width, height } = demensions;

    return (
        <div className="dimensions">
            {`${width}px - ${height}px`}
        </div>
    );
}

export default Dimensions;