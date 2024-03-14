import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns/format';

import ChevronLeft from '../../assets/icons/chevron-left.svg?react';
import ChevronRight from '../../assets/icons/chevron-right.svg?react';
import { QUERIES } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

type MonthPickerProps = {
  label: string;
  reachDate: Date;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
};

const MonthPicker = ({
  label,
  reachDate,
  handlePrevMonth,
  handleNextMonth,
  handleKeyDown,
}: MonthPickerProps) => {
  const selectedMonth = format(reachDate, 'LLLL');
  const selectedYear = format(reachDate, 'yyyy');

  return (
    <div>
      <Label>{label}</Label>
      <Wrapper tabIndex={-1} onKeyDown={handleKeyDown}>
        <Button onClick={handlePrevMonth}>
          <VisuallyHidden>previous month</VisuallyHidden>
          <ChevronLeft />
        </Button>
        {/* TODO: Improve UX by allowing user to click then select month & year */}
        <DateContainer>
          <VisuallyHidden aria-live="assertive" aria-label="selected month">
            {selectedMonth} {selectedYear}
          </VisuallyHidden>
          <Month aria-hidden="true">{selectedMonth}</Month>
          <Year aria-hidden="true">{selectedYear}</Year>
        </DateContainer>
        <Button onClick={handleNextMonth}>
          <VisuallyHidden>next month</VisuallyHidden>
          <ChevronRight />
        </Button>
      </Wrapper>
    </div>
  );
};

export default MonthPicker;

const Label = styled.span`
  font-size: 0.75rem;
  color: var(--color-secondary);

  @media ${QUERIES.tabletAndUp} {
    font-size: 0.875rem;
  }
`;

const Wrapper = styled.div`
  padding-inline: 12px;
  margin-top: 6px;
  border: 1px solid var(--color-gray-700);

  display: flex;
  justify-content: space-between;
  min-height: 56px;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  width: 3rem;
  height: 3.5rem;
  color: var(--color-gray-400);

  display: grid;
  place-content: center;
  cursor: pointer;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-inline: 15px;
  font-size: 0.875rem;

  @media ${QUERIES.tabletAndUp} {
    margin-inline: 10px;
    font-size: 1rem;
  }
`;

const Month = styled.span`
  font-weight: var(--font-weight-bold);
  margin-bottom: 5px;
  color: var(--color-secondary);
`;

const Year = styled.span`
  font-size: 0.9rem;
  color: var(--color-gray-300);
`;
