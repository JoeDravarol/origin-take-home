import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Renders Welcome to the Origin THA', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // ASSERT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Welcome to the Origin THA');
  });
});
