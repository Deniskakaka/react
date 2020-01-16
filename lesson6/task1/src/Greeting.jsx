import React, { Component } from 'react';
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

const Greeting = props => {
    const { isLoggenIn } = props;
    if (isLoggenIn ) {
        return <UserGreeting />
    }
    return <GuestGreeting />
};

export default Greeting;