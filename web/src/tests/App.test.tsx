import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../pages';

describe('Web test suite', () => {
  test('Renders home page correctly', () => {
    const { getByText } = render(<Home />);
    const linkElement = getByText(/Full Stack Starterkit/i);
    expect(linkElement).toBeTruthy();
  });
});
