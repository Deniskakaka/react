import React from 'react';
import { shallow } from 'enzyme';
import User from '../User.jsx';
import { getUserList }  from '../userGateway.js';
jest.mock('../userGateway', () => {
    return {
        getUserList: jest.fn(() => Promise.resolve())
    }
})

describe('User', () => {
    it('should display Login button if user logged out', () => {
        const wrappedComponent = shallow(<User/>);
        expect(wrappedComponent.find('.user').exists()).toEqual(false);
    });

    it('should display Login button if user logged out', () => {
        const wrappedComponent = shallow(<User/>);
        wrappedComponent.setState({
            userData: {
                avatar__url: 'https://example.com',
                name:'John',
                location:'England'
            }
        })
        expect(wrappedComponent.find('.user')).toMatchSnapshot(true);
    });

    it('should display Login button if user logged out', () => {
        const wrappedComponent = shallow(<User/>);
        expect(getUserList).toBeCalled();
    });
})