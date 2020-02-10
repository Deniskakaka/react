import React from 'react';
import { shallow } from 'enzyme';
import TaskList from '../TaskList.jsx';
import { fetchTasksList }  from '../TasksGetWay.js';

jest.mock('../TasksGetWay.js', () => {
    return {
        fetchTasksList: jest.fn(() => Promise.resolve())
    }
})

describe('<TaskList/>', () => {
    it('should display sorted by "done" status', () => {
        const props = {
            handleTaskStatusChange: jest.fn(),
            handleTaskDelete: jest.fn(),
            tasks: [
                {text: 'Taks1', done: true, id: 'task-id-1'},
                {text: 'Taks2', done: false, id: 'task-id-2'},
                {text: 'Taks3', done: true, id: 'task-id-3'}
            ]
        }
        const wrappedComponent = shallow(<TaskList {...props}/>)
        expect(wrappedComponent).toMatchSnapshot();
    })
});