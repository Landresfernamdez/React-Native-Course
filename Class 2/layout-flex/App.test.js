import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';
import FlexDirectionBasics from './App';

it('renders without crashing', () => {
  const rendered = renderer.create(<FlexDirectionBasics />).toJSON();
  expect(rendered).toBeTruthy();
});
