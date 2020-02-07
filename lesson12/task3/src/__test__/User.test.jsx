import React from 'react';
import { shallow } from 'enzyme';
import User from '../User.jsx';

describe('User', () => {
    it('if component takes message should render div', () => {
        const wrappedComponent = shallow(<User name={'Denis'} age={29}/>)
        expect(wrappedComponent.find('.user__name').text()).toEqual('Denis')
        expect(wrappedComponent.find('.user__age').text()).toEqual('29')
    })
})