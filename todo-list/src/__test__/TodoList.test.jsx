import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../TodoList.jsx';

describe('<TodoList/>', () => {
    it('should', () => {
        const wrappedComponent = shallow(<TodoList/>)
        expect(wrappedComponent.find('TaskList').exists()).toBeTruthy()
    });
    it('should', () => {
        const wrappedComponent = shallow(<TodoList/>)
        expect(wrappedComponent.find('.title').exists()).toBeTruthy()
    });
});