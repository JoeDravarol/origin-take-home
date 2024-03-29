import styled from 'styled-components';

import OriginLogo from '../assets/icons/origin-logo.svg?react';
import { QUERIES } from '../constants';

const Navbar = () => {
  return (
    <Nav>
      <OriginLogo />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 56px;
  padding-inline: 16px;
  margin-bottom: 0.5rem;
  background: var(--color-primary);
  display: flex;
  align-items: center;

  @media ${QUERIES.laptopAndUp} {
    height: 80px;
    padding-inline: 24px;
    padding-left: 56px;
    margin-bottom: 1.5rem;
  }
`;
