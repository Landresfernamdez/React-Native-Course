import React from 'react';
import FlatListBasics from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<FlatListBasics />).toJSON();
  expect(rendered).toBeTruthy();
});
