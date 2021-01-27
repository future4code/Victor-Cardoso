import { HiHeart, HiStar, HiX } from "react-icons/hi";
import { Flex, IconButton } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      w="100%"
      h="100%"
      maxH="10vh"
      justify="space-evenly"
      align="center"
    >
      <IconButton
        padding="1.5rem .7rem"
        fontSize="1.8rem"
        borderRadius="50%"
        colorScheme="red"
        icon={<HiX />}
      ></IconButton>{" "}
      <IconButton
        padding="1.5rem .7rem"
        fontSize="1.8rem"
        borderRadius="50%"
        colorScheme="blue"
        icon={<HiStar />}
      />
      <IconButton
        padding="1.5rem .7rem"
        fontSize="1.8rem"
        borderRadius="50%"
        colorScheme="red"
        icon={<HiHeart />}
      />
    </Flex>
  );
};

export default Footer;
