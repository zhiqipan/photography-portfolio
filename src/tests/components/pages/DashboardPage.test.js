import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../../components/pages/DashboardPage';

it('should render ExpenseDashboardPage correctly', () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
