import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UserList from './UserList.jsx';

const rootElement = document.querySelector("#root");

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
    },
    {
        age:23,
        name:'Ann',
        id: '4'
    },
    {
        age:47,
        name:'Vova',
        id: '5'
    },
    {
        age:81,
        name:'John',
        id: '6'
    },
    {
        age:17,
        name:'Marty',
        id: '7'
    },
    {
        age:19,
        name:'Oleg',
        id: '8'
    },
    {
        age:18,
        name:'Pape',
        id: '9'
    },
    {
        age:45,
        name:'Tad',
        id: '10'
    },
];


ReactDOM.render(<UserList users={users}/>, rootElement);