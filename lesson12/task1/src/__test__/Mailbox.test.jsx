import React from 'react';
import { shallow } from 'enzyme';
import Mailbox from '../Mailbox.jsx';

describe('Mailbox', () => {
    it('shold not render count if no unread messages', () => {
       const wrappedComponent = shallow(<Mailbox unreadMessages={[]}/>);
       expect(wrappedComponent.find('.mailbox__count').exists()).toEqual(false)
    });
    it('shold  render corect count if no unread messages', () => {
        const unreadMessages = [1,2,3,4,5]
        const wrappedComponent = shallow(
            <Mailbox unreadMessages={unreadMessages}/>
        );
        expect(wrappedComponent.find('.mailbox__count').text()).toEqual('5')
     });
});