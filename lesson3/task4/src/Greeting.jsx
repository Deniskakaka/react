import React from 'react';

const Greeting = props => {
   return ( 
        <div className="greeting">
            <span>{`My name is ${'John'} ${'Doe'}. i'm ${17} years old `}</span>
        </div>
   );
};

export default Greeting;