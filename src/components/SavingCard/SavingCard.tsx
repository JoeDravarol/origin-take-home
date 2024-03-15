import styled from 'styled-components';

import HouseIcon from '../../assets/icons/buy-a-house.svg?react';

import MonthPicker, { useMonthPicker } from '../MonthPicker';
import CurrencyInput, { useCurrencyInput } from '../CurrencyInput';
import MonthlyAmountInfo from '../MonthlyAmountInfo';
import { QUERIES } from '../../constants';

const SavingCard = () => {
  const { amount, formattedAmount, handleAmountChange } = useCurrencyInput();
  const {
    reachDate,
    getPrevMonth,
    getNextMonth,
    handleKeyDown,
    getTotalMonthToDeposit,
    getDateInStringFormat,
  } = useMonthPicker();

  const calculateMonthlyDeposit = () => {
    const totalMonth = getTotalMonthToDeposit();

    if (totalMonth <= 1) return formattedAmount;

    const monthlyDeposit = ((amount || 0) / totalMonth).toFixed(2);

    return monthlyDeposit;
  };

  return (
    <Wrapper>
      <Header>
        <HouseIcon />

        <HeaderContent>
          <Heading>Buy a house</Heading>
          <HeaderSpan>Saving goal</HeaderSpan>
        </HeaderContent>
      </Header>

      <GridContainer>
        <InputContainer>
          <CurrencyInput
            label="Total amount"
            value={amount}
            handleOnChange={handleAmountChange}
          />
        </InputContainer>

        <MonthPicker
          label="Reach goal by"
          reachDate={reachDate}
          handlePrevMonth={getPrevMonth}
          handleNextMonth={getNextMonth}
          handleKeyDown={handleKeyDown}
        />
      </GridContainer>

      {amount && (
        <MonthlyAmountInfo
          monthlyAmount={calculateMonthlyDeposit()}
          totalMonthToDeposit={getTotalMonthToDeposit()}
          savingGoal={formattedAmount}
          reachGoalDate={getDateInStringFormat()}
        />
      )}

      <CtaContainer>
        <Cta>Confirm</Cta>
      </CtaContainer>
    </Wrapper>
  );
};

export default SavingCard;

const Wrapper = styled.section`
  padding: 1.5rem;
  padding-bottom: 2.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 16px 32px 0px #1e2a3214;

  @media ${QUERIES.tabletAndUp} {
    padding: 2.5rem;
    padding-top: 2rem;

    max-width: 560px;
    margin-inline: auto;
  }
`;

const Header = styled.header`
  margin-bottom: 1rem;
  display: flex;

  @media ${QUERIES.laptopAndUp} {
    margin-bottom: 1.5rem;
  }
`;

const HeaderContent = styled.div`
  margin-left: 1rem;

  display: flex;
  flex-direction: column;
`;

const Heading = styled.h3`
  font-family: var(--font-family-sans-serif-header);
  font-size: 1.25rem;
`;

const HeaderSpan = styled.span`
  font-size: 0.875rem;
  color: var(--color-gray-300);
`;

const GridContainer = styled.div`
  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 272px 192px;
    grid-gap: 1rem;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: revert;
  }
`;

const CtaContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Cta = styled.button`
  background: var(--color-accent);
  border: none;
  border-radius: 32px;
  width: 320px;
  height: 56px;
  margin-top: 32px;

  color: var(--color-white);
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  text-align: center;
  cursor: pointer;
`;
