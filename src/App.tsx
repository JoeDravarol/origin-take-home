import styled from 'styled-components';

import SavingCard from './components/SavingCard';
import Navbar from './components/Navbar';

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
`;

const Heading = styled.h2`
  font-size: 1.125rem;
  color: #1b31a8;
  font-weight: normal;
  text-align: center;
`;

const HeadingBold = styled.span`
  font-weight: bold;
`;
