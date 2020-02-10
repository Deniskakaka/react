import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../Dialog.jsx';

describe('Dialog', () => {
    it('should isOpen equal true dialog is show', () => {
        const wrappedComponent = shallow(<Dialog isOpen/>)
        expect(wrappedComponent.find('.dialog').exists()).toBeTruthy();
    });

    it('should isOpen equal false dialog is none', () => {
        const wrappedComponent = shallow(<Dialog />)
        expect(wrappedComponent.find('.dialog').exists()).toEqual(false);
    });

    it('should onClose is function and it work', () => {
        const mockLogin = jest.fn();
        const wrappedComponent = shallow(<Dialog isOpen onClose={mockLogin}/>)
        wrappedComponent.find('.dialog__close-btn').simulate('click')
        expect(mockLogin).toBeCalled();
    });

    it('should show display elements', () => {
        const wrappedComponent = shallow(<Dialog isOpen/>)
        expect(wrappedComponent).toMatchSnapshot();
    });

    it('should isOpen equal false dialog is none', () => {
        const wrappedComponent = shallow(<Dialog isOpen><span>0</span></Dialog>)
        expect(wrappedComponent.find('.dialog').find('.dialog__content').text()).toEqual('0');
    });
})