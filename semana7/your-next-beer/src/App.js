import React, { Component } from "react";
import styled from "styled-components";
import Cervejaria from "./components/Cervejaria";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #f9f8f0; */
  font-family: "Yusei Magic", sans-serif;
  color: #7db59a;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

const Heading1 = styled.h1`
  color: #f5af00;
  text-align: center;
  font-size: 2.5rem;
`;

class App extends Component {
  render() {
    return (
      <Main>
        <Container>
          <Heading1>Your Next Beer!</Heading1>
          <h2>Here's a list of breweries around the United States</h2>
          <h3>
            Feel free to access their websites while planning for your next
            beertrip!
          </h3>
          <Cervejaria />
        </Container>
      </Main>
    );
  }
}

export default App;
