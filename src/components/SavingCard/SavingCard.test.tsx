import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import SavingCard from './SavingCard';
import * as utils from '../../utils/test';

function setup(jsx: React.ReactNode) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe('MonthPicker', () => {
  it('handle cycling month forward and backward with button', async () => {
    // Setup
    const { user } = setup(<SavingCard />);

    // Arrange
    const initialDate = new Date();
    const initialSelectedDate = screen.getByLabelText('selected month');

    expect(initialSelectedDate).toHaveTextContent(
      utils.getFormattedDate(initialDate)
    );

    const prevMonthTrigger = screen.getByRole('button', {
      name: /previous month/i,
    });
    const nextMonthTrigger = screen.getByRole('button', {
      name: /next month/i,
    });

    expect(prevMonthTrigger).toBeInTheDocument();
    expect(nextMonthTrigger).toBeInTheDocument();

    // Act
    await user.tripleClick(nextMonthTrigger);
    await user.click(prevMonthTrigger);

    // Assert
    const expectedDate = utils.incrementMonthBy(2, initialDate);
    const expectedMonth = utils.getFormattedDate(expectedDate);
    const selectedMonth = screen.getByLabelText('selected month');

    expect(selectedMonth).toHaveTextContent(expectedMonth);
  });

  it('handle cycle month using keyboard navigation', async () => {
    // Setup
    const { user } = setup(<SavingCard />);

    // Arrange
    const initialDate = new Date();
    const initialSelectedDate = screen.getByLabelText('selected month');
    const prevMonthTrigger = screen.getByRole('button', {
      name: /previous month/i,
    });

    expect(initialSelectedDate).toHaveTextContent(
      utils.getFormattedDate(initialDate)
    );

    // Act
    prevMonthTrigger.focus();

    expect(prevMonthTrigger).toHaveFocus();

    await user.keyboard(
      '[ArrowLeft][ArrowRight][ArrowRight][ArrowRight][ArrowLeft]'
    );

    // Assert
    const expectedDate = utils.incrementMonthBy(2, initialDate);
    const expectedMonth = utils.getFormattedDate(expectedDate);
    const selectedMonth = screen.getByLabelText('selected month');

    expect(selectedMonth).toHaveTextContent(expectedMonth);
  });
});
