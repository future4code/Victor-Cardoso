import React from "react";
import { Flex } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";

const TripDetails = () => {
  useAuth();
  return (
    <Flex as="section" h="65vh">
      Details
    </Flex>
  );
};

export default TripDetails;
