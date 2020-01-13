import React from 'react';
import Comment from './Comment.jsx';

const userInfo = {
    name: 'Tom',
    avatartUrl: 'https://i.pinimg.com/originals/d7/8d/ed/d78ded484342499fa871c5970f8f39db.jpg'
};



const App = () => {
    return (
        <Comment
            user = {userInfo}
            text='Good job!'
            date={new Date('2019-01-01T11:32:19.566Z')}
        />   
    );
}

export default App;