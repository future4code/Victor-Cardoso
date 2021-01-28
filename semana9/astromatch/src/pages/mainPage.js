import { Flex, Center } from "@chakra-ui/react";
import React from "react";

import SwipeCard from "../components/swipeCard";

const mainPage = () => {
  return (
    <Center as="main" h="100%" w="100%">
      <Flex
        as="section"
        h="100%"
        padding="2rem"
        w="100%"
        justify="center"
        align="center"
      >
        <SwipeCard />
      </Flex>
    </Center>
  );
};

export default mainPage;
