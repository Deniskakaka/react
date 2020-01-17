import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NumbersList from './NumbersList.jsx';

const rootElement = document.querySelector('#root');

const number = [1, 2, 3, 4, 5]

ReactDOM.render(<NumbersList numbers={number}/>, rootElement);