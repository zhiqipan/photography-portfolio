import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../../components/pages/NotFoundPage';

it('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
