import React from "react";

import { Button, Flex, Image, Link } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

import Logo from "../../img/Logo.svg";
import {
  goHome,
  goToApply,
  goToSignIn,
  goToSignUp,
} from "../../routes/Coordinator";

const Header = () => {
  const history = useHistory();
  return (
    <Flex
      as="header"
      w="100%"
      h="20vh"
      minH="140px"
      alignItems="center"
      justify="space-around"
    >
      <Flex maxW="30%" w="30%" justify="space-evenly">
        <Button
          colorScheme="whiteTrip"
          variant="outline"
          fontSize="1.2rem"
          fontWeight="400"
          paddingX="1rem"
          _hover={{
            color: "purpleTrip.400",
            bgColor: "transparent",
          }}
          onClick={() => goToSignUp(history)}
        >
          register
        </Button>
        <Button
          colorScheme="whiteTrip"
          variant="outline"
          fontWeight="400"
          fontSize="1.2rem"
          paddingX="1rem"
          _hover={{ color: "purpleTrip.400", bgColor: "transparent" }}
          onClick={() => goToSignIn(history)}
        >
          login
        </Button>
      </Flex>
      <Flex maxW="40%">
        <Image
          onClick={() => goHome(history)}
          cursor="pointer"
          w="100%"
          maxH="140px"
          src={Logo}
        />
      </Flex>
      <Flex maxW="30%" paddingX="1rem">
        <Button
          marginRight="1.5rem"
          colorScheme="yellowTrip"
          color="blackTrip.100"
          fontSize="1.2rem"
          fontWeight="600"
          paddingX="1rem"
          _hover={{ color: "yellowTrip.700", bgColor: "purpleTrip.400" }}
          onClick={() => goToApply(history)}
        >
          let's trip!
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
