import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Renders saving goal simulator', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // ASSERT
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('saving goal');
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('Buy a house');
  });
});
