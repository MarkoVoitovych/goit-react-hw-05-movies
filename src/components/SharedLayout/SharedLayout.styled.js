import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.header``;

export const Nav = styled.nav``;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
