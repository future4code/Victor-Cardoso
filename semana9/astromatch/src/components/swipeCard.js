import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const SwipeCard = (props) => {
  return (
    <Flex
      w="100%"
      h="100%"
      minH="75vh"
      maxW="450px"
      maxH="700px"
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-end"
      boxShadow="1px 3px 5px grey"
      borderRadius="5px"
      bgImage={`url('${props.person.photo}')`}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="100% 100%"
      objectFit="cover"
      padding="1.5rem"
      cursor="pointer"
      marginBottom="2rem"
    >
      <Text
        color="white"
        fontSize="2rem"
        fontWeight="bold"
        textShadow="1px 1px 1px #1e1e1e"
      >
        {props.person.name}
      </Text>
      <Text color="white" textShadow="1px 1px 1px #1e1e1e">
        {props.person.bio}
      </Text>
    </Flex>
  );
};

export default SwipeCard;
