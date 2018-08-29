import React from 'C:/Users/Landr/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import App from './App';

import renderer from 'C:/Users/Landr/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
