import styled from 'styled-components';
import { format } from 'date-fns/format';

import ChevronLeft from '../../assets/icons/chevron-left.svg?react';
import ChevronRight from '../../assets/icons/chevron-right.svg?react';

import useMonthPicker from './useMonthPicker';

const MonthPicker = () => {
  const { reachDate, getPrevMonth, getNextMonth, handleKeyDown } =
    useMonthPicker();

  return (
    <Wrapper tabIndex={-1} onKeyDown={handleKeyDown}>
      <Button onClick={getPrevMonth}>
        <ChevronLeft />
      </Button>
      {/* TODO: Improve UX by allowing user to click then select month & year */}
      <DateContainer>
        <Month>{format(reachDate, 'LLLL')}</Month>
        <Year>{format(reachDate, 'yyyy')}</Year>
      </DateContainer>
      <Button onClick={getNextMonth}>
        <ChevronRight />
      </Button>
    </Wrapper>
  );
};

export default MonthPicker;

const Wrapper = styled.div`
  padding-inline: 12px;
  border: 1px solid #e9eef2;

  display: flex;
  justify-content: space-between;
  min-height: 56px;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  width: 3rem;
  height: 3.5rem;
  color: #8a9ca9;

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
`;

const Month = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
  color: #1e2a32;
`;

const Year = styled.span`
  font-size: 0.9rem;
  color: #708797;
`;
