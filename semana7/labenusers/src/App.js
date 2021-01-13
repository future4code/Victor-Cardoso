import React from "react";
import styled from "styled-components";
import UsersPage from "./pages/UsersPage";
import RegisterPage from "./pages/RegisterPage";

// Styled Components

const Heading1 = styled.h1`
  font-size: 2rem;
  padding: 0 2rem;
`;

const Heading2 = styled.h2`
  padding: 1rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  color: #664e4c;
  font-family: "Fraunces", serif;
  overflow-x: hidden;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 1rem;
  background-color: #f3edce;
`;

const Ul = styled.ul`
  display: flex;
  padding: 0 2rem;
`;
const Li = styled.li`
  list-style: none;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const Button = styled.button`
  padding: 0.5rem 0.7rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 1000;
  cursor: pointer;
  margin: 0.5rem 1rem;
  background-color: #c1d37f;
  color: #fff;

  &:hover {
    background-color: #b5cb67;
  }
`;

class App extends React.Component {
  state = {
    page: true,
  };

  handlerChangePage = () => {
    this.setState({ page: !this.state.page });
  };

  render() {
    return (
      <Main>
        <Header>
          <Heading1>Labenusers</Heading1>

          <Ul>
            <Li>
              <Button href="/">Users</Button>
            </Li>
            <Li>
              <Button onClick={this.handlerChangePage}>Register</Button>
            </Li>
            <Li>
              <Button onClick={this.handlerChangePage}>Profile</Button>
            </Li>
          </Ul>
        </Header>

        <Section>{this.state.page ? <UsersPage /> : <RegisterPage />}</Section>

        <Footer>
          <Heading2>
            <Container>Footer</Container>
          </Heading2>
        </Footer>
      </Main>
    );
  }
}

export default App;
