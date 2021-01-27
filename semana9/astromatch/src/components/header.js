import { Tabs } from "@chakra-ui/react";
import React from "react";

const Header = ({ children }) => {
  return (
    <Tabs isFitted variant="unstyled" as="header" w="100%" h="90vh" maxH="90vh">
      {children}
    </Tabs>
  );
};

export default Header;
