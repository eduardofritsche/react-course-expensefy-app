import { shallow } from 'enzyme';
import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary length={1} total={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary length={23} total={6541321321} />);
  expect(wrapper).toMatchSnapshot();
});