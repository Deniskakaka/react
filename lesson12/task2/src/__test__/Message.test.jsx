import React from 'react';
import { shallow } from 'enzyme';
import Message from '../Message.jsx';

describe('Message', () => {
    it('if component takes message should render div', () => {
        const wrappedComponent = shallow(<Message text={'Hello'}/>)
        expect(wrappedComponent.find('.message').exists()).toEqual(true)
    })

    it("if component don't takes message should not render div", () => {
        const wrappedComponent = shallow(<Message/>)
        expect(wrappedComponent.find('.message').exists()).toEqual(false)
    })
})