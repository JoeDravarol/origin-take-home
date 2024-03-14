import styled from 'styled-components';

import SavingCard from './components/SavingCard';
import Navbar from './components/Navbar';

import { QUERIES } from './constants';

export default function App() {
  return (
    <>
      <Navbar />

      <Container>
        <Heading>
          Let's plan your <HeadingBold>saving goal.</HeadingBold>
        </Heading>
      </Container>

      <SavingCard />
    </>
  );
}

const Container = styled.article`
  margin-block: 1.5rem;

  @media ${QUERIES.laptopAndUp} {
    margin-top: 3rem;
  }
`;

const Heading = styled.h2`
  font-size: 1.125rem;
  color: var(--color-accent);
  font-weight: var(--font-weight-normal);
  text-align: center;
`;

const HeadingBold = styled.span`
  font-weight: var(--font-weight-bold);
`;
