import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UserList from './UserList.jsx';

const rootElement = document.querySelector('#root');

const users = [
    {
        age:21,
        name:'Bob',
        id: '1'
    },
    {
        age:17,
        name:'Tom',
        id: '2'
    },
    {
        age:18,
        name:'Tad',
        id: '3'
    }
];

ReactDOM.render(<UserList users={users}/>, rootElement);