import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

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

const Heading1 = styled.h1`
  font-size: 2rem;
  padding: 0 2rem;
`;

const ProfilePage = (props) => {
  return (
    <Section key={props.id}>
      <Heading1>Profile</Heading1>
      <Container>
        <p>{props.name}</p>
        <p>{props.email}</p>
      </Container>
    </Section>
  );
};

export default ProfilePage;
