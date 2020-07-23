import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';

test('renders learn react link', () => {
  const { getRoute } = render(<App />);
  const linkElement = getRoute(Route);
  expect(linkElement).toBeInTheDocument();
});
