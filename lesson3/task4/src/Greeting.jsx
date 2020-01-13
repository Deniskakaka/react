import React from 'react';

const Greeting = props => {
   return ( 
        <div className="greeting">
            <span>{`My name is ${props.firstName} ${props.lastName}. i'm ${props.birthDate} years old `}</span>
        </div>
   );
};

export default Greeting;