import React from "react";
import { Flex } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";

const Applies = () => {
  useAuth();
  return (
    <Flex as="section" h="65vh">
      Applies dashboard
    </Flex>
  );
};

export default Applies;
