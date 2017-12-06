// __tests__/header-test.js
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/components/Header';

it('renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
