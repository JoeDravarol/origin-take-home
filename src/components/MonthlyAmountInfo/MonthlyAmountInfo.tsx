import styled from 'styled-components';

import { QUERIES } from '../../constants';

type MonthlyAmountInfoProps = {
  monthlyAmount: string;
  totalMonthToDeposit: number;
  savingGoal: string;
  reachGoalDate: string;
};

const MonthlyAmountInfo = ({
  monthlyAmount,
  totalMonthToDeposit,
  savingGoal,
  reachGoalDate,
}: MonthlyAmountInfoProps) => {
  return (
    <Wrapper>
      <Header>
        <MonthlyAmountLabel>Monthly amount</MonthlyAmountLabel>
        <MonthlyAmount aria-label="monthly amount">
          ${monthlyAmount}
        </MonthlyAmount>
      </Header>

      <Footer>
        <Paragraph aria-label="monthly saving summary">
          You're planning <Bold>{totalMonthToDeposit} monthly deposits</Bold> to
          reach your <Bold>${savingGoal}</Bold> goal by{' '}
          <Bold>{reachGoalDate}.</Bold>
        </Paragraph>
      </Footer>
    </Wrapper>
  );
};

export default MonthlyAmountInfo;

const Wrapper = styled.div`
  min-height: 155px;
  border: 1px solid var(--color-gray-700);
  border-radius: 8px;
  font-weight: var(--font-weight-normal);
  color: var(--color-secondary);
  margin-top: 1.5rem;
`;

const Header = styled.div`
  padding: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    justify-content: space-between;
  }
`;

const MonthlyAmountLabel = styled.span`
  font-size: 1.125rem;
  margin-right: 0.5rem;

  @media ${QUERIES.tabletAndUp} {
    font-size: 1.25rem;
  }
`;

const MonthlyAmount = styled.span`
  font-family: var(--font-family-sans-serif-header);
  font-size: 1.5rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-accent-light);
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${QUERIES.tabletAndUp} {
    font-size: 2rem;
  }
`;

const Footer = styled.div`
  background: var(--color-offwhite);
  padding: 1.5rem;
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    text-align: revert;
  }
`;

const Paragraph = styled.p`
  font-size: 0.75rem;
`;

const Bold = styled.span`
  font-weight: var(--font-weight-bold);
`;
