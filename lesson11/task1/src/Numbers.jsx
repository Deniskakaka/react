import React from 'react';

class Numbers extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.number === nextProps && 
               this.props.title === nextProps.title 
               ? true : false ;
    }
    render () {
        return (
            <div className="number">
                <span className="number__title">{this.props.title}</span>
                <span className="number__value">{this.props.number}</span>
            </div>
        )
    }
};

export default Numbers;