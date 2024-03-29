import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../../components/pages/LoginPage';

it('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});
