import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment.jsx';

const rootElement = document.querySelector('#root');

const userInfo = {
    name : 'Tom',
    avatartUrl : 'https://koteiki.com/wp-content/uploads/2018/05/aaron.jpg'
};

ReactDOM.render(
    <Comment
      user = {userInfo}
      text='Good job!'
      date={new Date('2019-01-01T11:32:19.566Z')}
    />,
    rootElement  
)