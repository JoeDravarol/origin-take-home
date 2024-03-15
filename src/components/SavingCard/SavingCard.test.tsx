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

describe('SavingCard', () => {
  it('renders correct monthly deposit summary', async () => {
    // Setup
    const { user } = setup(<SavingCard />);

    // Arrange
    const initialDate = new Date();
    const input = screen.getByLabelText(/total amount/i);
    const nextMonthTrigger = screen.getByRole('button', {
      name: /next month/i,
    });
    const prevMonthTrigger = screen.getByRole('button', {
      name: /previous month/i,
    });

    expect(input).toBeInTheDocument();

    // Act
    const savingAmount = '25000';

    await user.type(input, savingAmount);
    // Update reach goal by 5 month
    await user.tripleClick(nextMonthTrigger);
    await user.tripleClick(nextMonthTrigger);
    await user.click(prevMonthTrigger);

    // Assert
    const expectedDate = utils.incrementMonthBy(5, initialDate);
    const expectedSummary = {
      montlyDeposit: '5000',
      totalMonthToDeposit: '5 monthly deposits',
      savingGoal: '25,000',
      date: utils.getFormattedDate(expectedDate),
    };

    const selectedMonth = screen.getByLabelText('selected month');
    const monthlyAmount = screen.getByLabelText('monthly amount');
    const summaryDescription = screen.getByLabelText('monthly saving summary');

    expect(selectedMonth).toHaveTextContent(expectedSummary.date);
    expect(monthlyAmount).toHaveTextContent('$5000');
    expect(summaryDescription).toHaveTextContent(
      expectedSummary.totalMonthToDeposit
    );
    expect(summaryDescription).toHaveTextContent(expectedSummary.savingGoal);
    expect(summaryDescription).toHaveTextContent(expectedSummary.date);
  });
});
