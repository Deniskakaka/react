import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Users from './Users.jsx';
import Home from './Home.jsx';
import './index.scss';

function App() {
    return (
        <div className="page">
            <BrowserRouter>
                <ul className="navigation">
                    <li className="navigation__item"><Link to="/">Home</Link></li>
                    <li className="navigation__item"><Link to="/users">Users</Link></li>
                </ul>
                <Route exact path='/'><Home/></Route>
                <Route path='/users' component={Users}></Route>
            </BrowserRouter>
        </div>
    );
};

export default App;