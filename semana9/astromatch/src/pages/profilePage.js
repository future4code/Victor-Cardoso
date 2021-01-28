import React from "react";
import { Flex, Center, Image, Text } from "@chakra-ui/react";

import ProfileImage from "../img/imgProfile.jpeg";

const profilePage = () => {
  return (
    <Center as="main" h="100%" w="100%">
      <Flex
        as="section"
        h="100%"
        w="100%"
        justify="center"
        align="flex-start"
        p="2rem"
      >
        <Image
          boxSize="250px"
          objectFit="cover"
          borderRadius="full"
          src={ProfileImage}
        />
        <Text>Victor</Text>
      </Flex>
    </Center>
  );
};

export default profilePage;
