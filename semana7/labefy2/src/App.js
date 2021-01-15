import React, { Component } from "react";
import styled from "styled-components";
import PlaylistsPage from "./pages/PlaylistsPage";
import CreatePlaylistPage from "./pages/CreatePlaylistPage";

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
  font-family: "Carme", sans-serif;
  overflow-x: hidden;
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
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

const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const Ul = styled.ul`
  display: flex;
  padding: 0 2rem;
`;

const Li = styled.li`
  list-style: none;
`;

const Button = styled.button`
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 1000;
  font-family: "Carme", sans-serif;
  text-transform: uppercase;
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
    page: "playlists",
  };

  goToPlaylistsPage = () => {
    this.setState({ page: "playlists" });
  };
  goToCreatePlaylistPage = () => {
    this.setState({ page: "create" });
  };
  render() {
    const handlerChangePage = () => {
      switch (this.state.page) {
        case "playlists":
          return <PlaylistsPage title={"My Playlists"} />;
        case "create":
          return <CreatePlaylistPage title={"Create playlist"} />;
        default:
          return <PlaylistsPage />;
      }
    };

    return (
      <Main>
        <Header>
          <Heading1>Labefy</Heading1>

          <Ul>
            <Li>
              <Button onClick={this.goToPlaylistsPage}>My Playlists</Button>
            </Li>
            <Li>
              <Button onClick={this.goToCreatePlaylistPage}>
                Create playlist
              </Button>
            </Li>
          </Ul>
        </Header>
        <Section>{handlerChangePage()}</Section>

        <Footer>
          <Container>
            <audio controls>
              <source></source>
            </audio>
          </Container>
        </Footer>
      </Main>
    );
  }
}

export default App;
