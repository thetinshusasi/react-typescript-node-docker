import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders learn react link', () => {
 const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
