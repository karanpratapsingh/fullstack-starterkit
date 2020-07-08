import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../pages';

// FIXME: fix tests (path alias issue)
test('renders home page correctly', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
