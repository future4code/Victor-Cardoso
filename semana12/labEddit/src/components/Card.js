import { Flex } from "@chakra-ui/react";
import React from "react";

const Card = (props) => {
  return (
    <Flex
      w="100%"
      h="100%"
      boxShadow="1px 1px 5px grey"
      borderRadius="7px"
      justify="center"
      margin="4"
      padding="4"
      direction="column"
    >
      {props.children}
    </Flex>
  );
};

export default Card;
