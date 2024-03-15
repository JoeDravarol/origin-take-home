import { describe, it } from 'vitest';
import {
  render,
  screen,
  renderHook,
  act,
  cleanup,
} from '@testing-library/react';
import { format } from 'date-fns/format';

import MonthPicker from './MonthPicker';
import useMonthPicker from './useMonthPicker';
import * as utils from '../../utils/test';

let initialDate: Date;

describe('MonthPicker', () => {
  beforeEach(() => {
    initialDate = new Date();
    const { result } = renderHook(() => useMonthPicker(initialDate));
    const { reachDate, getPrevMonth, getNextMonth, handleKeyDown } =
      result.current;

    render(
      <MonthPicker
        label="Reach goal by"
        reachDate={reachDate}
        handlePrevMonth={getPrevMonth}
        handleNextMonth={getNextMonth}
        handleKeyDown={handleKeyDown}
      />
    );
  });

  it('renders current month', () => {
    // Assert
    const expectedSelectedMonth = `${format(initialDate, 'LLLL')} ${format(initialDate, 'yyyy')}`;
    const selectedMonth = screen.getByLabelText('selected month');

    expect(selectedMonth).toHaveTextContent(expectedSelectedMonth);
  });

  // Note: Unsure how to test hook logic with component due to component not re-rendering when hook state changes

  afterEach(() => cleanup());
});

describe('useMonthPicker', () => {
  it('returns current month as initial reachDate', () => {
    // Arrange
    const initialDate = new Date();
    const { result } = renderHook(() => useMonthPicker(initialDate));

    // Assert
    expect(result.current.reachDate).toBe(initialDate);
  });

  it('handle cycle to future month', () => {
    // Arrange
    const initialDate = new Date();
    const { result } = renderHook(() => useMonthPicker(initialDate));

    // Act
    act(() => {
      result.current.getNextMonth();
    });

    // Assert
    const expectedDate = new Date(initialDate);
    expectedDate.setMonth(initialDate.getMonth() + 1);

    expect(result.current.reachDate).toEqual(expectedDate);
  });

  it('handle cycle month forward and backward', () => {
    // Arrange
    const initialDate = new Date();
    const { result } = renderHook(() => useMonthPicker(initialDate));

    // Act
    act(() => {
      result.current.getNextMonth();
    });

    act(() => {
      result.current.getNextMonth();
    });

    act(() => {
      result.current.getPrevMonth();
    });

    // Assert
    const expectedDate = new Date(initialDate);
    expectedDate.setMonth(initialDate.getMonth() + 1);

    expect(result.current.reachDate).toEqual(expectedDate);
  });

  it('prevent changing reachDate if it is not in the future', () => {
    // Arrange
    const initialDate = new Date();
    const { result } = renderHook(() => useMonthPicker(initialDate));

    // Act
    act(() => {
      result.current.getPrevMonth();
    });

    // Assert
    expect(result.current.reachDate).toEqual(initialDate);

    // Act 2
    act(() => {
      result.current.getNextMonth();
    });

    // Assert 2
    const expectedDate = utils.incrementMonthBy(1, initialDate);

    expect(result.current.reachDate).toEqual(expectedDate);
  });
});
