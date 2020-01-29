import React from 'react';
import Task from './Task.jsx'
import CreateTaskInput from './CreateTaskInput.jsx';
class TaskList extends React.Component {
    state = {
        tasks: [
            { text:'Buy Milk', done:false, id:1}, 
            { text:'Pick up Tom from airoport', done:false, id:2},
            { text:'Visit party', done:false, id:3},
            { text:'Visit doctor', done:true, id:4},
            { text:'Buy meat', done:true, id:5}
        ],
    }

    render() {
        return (
            <div className="todo-list">
            <CreateTaskInput/>
                <ul className="list">
                {this.state.tasks.map(task => (
                    <Task {...task} key={task.id}/>
                ))}
                </ul>
            </div>
            
        )
    } 
};

export default TaskList;