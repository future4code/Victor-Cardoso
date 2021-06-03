import React from "react";
import { Flex } from "@chakra-ui/react";

const NavBar = ({ children }) => {
  return (
    <Flex
      as="header"
      h="100px"
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      padding="1rem"
    >
      {children}
    </Flex>
  );
};

export default NavBar;
