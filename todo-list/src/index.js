import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const element = (
    <>
       <h1 className="title">Todo List</h1>
       <main className="todo-list">
            <div className="actions">
                <input className="task-input" type="text"></input>
                <button className="btn create-task-btn">Create</button>
            </div>
       </main> 
    </>  
);
ReactDOM.render(element, rootElement);