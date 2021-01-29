import React, { useState, useEffect } from "react";
import axios from "axios";

import { Flex, Center } from "@chakra-ui/react";

import SwipeCard from "../components/swipeCard";

import Footer from "../components/footer";

const MainPage = (props) => {
  // state person (object)
  const [person, setPerson] = useState({});
  // state choosePerson (id + boolean)

  // GET: getPerson
  const getPerson = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-cardoso-epps/person"
      )
      .then((response) => {
        // console.log(response.data.profile);
        setPerson(response.data.profile);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  // useEffect getPerson
  useEffect(() => {
    getPerson();
  }, []);

  // useEffect choosePerson

  return (
    <Center as="main" h="100%" w="100%">
      <Flex
        as="section"
        h="100%"
        minH="80vh"
        padding="0 2rem"
        w="100%"
        justify="center"
        align="center"
        direction="column"
      >
        <SwipeCard person={person} />
        <Footer person={person} getPerson={() => getPerson()} />
      </Flex>
    </Center>
  );
};

export default MainPage;
