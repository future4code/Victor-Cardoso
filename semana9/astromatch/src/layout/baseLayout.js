import { Flex, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const BaseLayout = ({ children }) => {
  return (
    <Flex as="section" w="100%" h="80vh" direction="column">
      {children}
    </Flex>
  );
};

export default BaseLayout;
