import React from "react";
import { Flex } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";

const CreateTrip = () => {
  useAuth();
  return (
    <Flex as="section" h="65vh">
      Create Trip
    </Flex>
  );
};

export default CreateTrip;
