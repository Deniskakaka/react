import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter.jsx';

describe('Counter', () => {
    it('should show number when put click on button equal -', () => {
        const wrappedComponent = shallow(<Counter/>);
        wrappedComponent.find('.counter').find('.counter__button').first().simulate('click');
        expect(wrappedComponent.find('.counter__value').text()).toEqual('-1');
    });

    it('should show number when put click on button equal +', () => {
        const wrappedComponent = shallow(<Counter/>);
        wrappedComponent.find('.counter').find('.counter__button').last().simulate('click');
        expect(wrappedComponent.find('.counter__value').text()).toEqual('1');
    });

    it('should show number when put click on button equal 0', () => {
        const wrappedComponent = shallow(<Counter/>);
        wrappedComponent.find('.counter__value').simulate('click');
        expect(wrappedComponent.find('.counter__value').text()).toEqual('0');
    });
})