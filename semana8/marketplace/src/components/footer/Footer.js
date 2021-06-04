import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiGithubFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <Flex
      as="footer"
      w="100%"
      h="100%"
      minH="150px"
      align="center"
      justifyContent="space-between"
      direction="column"
      color="brand.900"
    >
      <Flex w="100%" h="100%" paddingY="2.5rem" justify="center" align="center">
        <Flex
          justifyContent="flex-end"
          w="50%"
          paddingLeft="1rem"
          fontSize="14px"
        >
          <Link paddingX="0.5rem">Condições de uso</Link>
          <Link paddingX="0.5rem">Fale conosco</Link>
        </Flex>
        <Flex
          justifyContent="flex-start"
          w="50%"
          paddingRight="3rem"
          fontSize="2.2rem"
        >
          <Link paddingX="0.7rem">
            <RiInstagramLine />
          </Link>
          <Link paddingX="0.7rem">
            <RiFacebookCircleLine />
          </Link>
          <Link paddingX="0.7rem">
            <RiLinkedinBoxLine />
          </Link>
          <Link paddingX="0.7rem">
            <RiGithubFill />
          </Link>
        </Flex>
      </Flex>
      <Flex w="100%" justify="center">
        <Text fontSize="12px">FutureCar 2021 © All rights reserved.</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
