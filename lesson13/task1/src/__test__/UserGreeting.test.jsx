import React from 'react';
import { shallow } from 'enzyme';
import UserGreeting from '../UserGreeting.jsx';

describe('UserGreeting', () => {
   it('should display UserGreeting', () => {
       const wrapperComponent = shallow(<UserGreeting/>);
       expect(wrapperComponent).toMatchSnapshot();
   })
});