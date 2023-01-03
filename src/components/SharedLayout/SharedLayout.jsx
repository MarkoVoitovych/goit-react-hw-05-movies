import { Outlet } from 'react-router-dom';
import { Container, StyledLink, Header, Nav } from './SharedLayout.styled';

function SharedLayout() {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Outlet />
    </Container>
  );
}

export default SharedLayout;
