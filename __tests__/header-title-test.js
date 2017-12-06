// __tests__/header-title-test.js
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HeaderTitle from '../src/components/HeaderTitle';

it('renders correctly', () => {
  const tree = renderer.create(<HeaderTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});
