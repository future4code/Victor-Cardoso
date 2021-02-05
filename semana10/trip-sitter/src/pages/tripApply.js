import React from "react";

import { Flex, Heading } from "@chakra-ui/react";
import ApplyForm from "../components/ApplyForm";

const TripApply = () => {
  return (
    <Flex
      as="section"
      h="65vh"
      w="100%"
      direction="column"
      justify="center"
      align="center"
    >
      <Heading paddingBottom="1rem">Trip Apply</Heading>
      <ApplyForm />
    </Flex>
  );
};

export default TripApply;
