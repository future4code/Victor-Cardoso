import React from "react";

import { Button, Center, Flex, Heading } from "@chakra-ui/react";
import { goToCreateTrip } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";
import { getToken } from "../../hooks/useToken";

const Footer = () => {
  const history = useHistory();
  const token = getToken();
  return (
    <Flex as="footer" w="100%" h="15vh" justify="center">
      <Center h="100%" w="100%">
        {token && (
          <Button
            colorScheme="yellowTrip"
            color="blackTrip.100"
            fontSize="1.2rem"
            fontWeight="600"
            padding="1rem"
            _hover={{ color: "yellowTrip.700", bgColor: "purpleTrip.400" }}
            _active={{ color: "yellowTrip.500", bgColor: "purpleTrip.200" }}
            onClick={() => goToCreateTrip(history)}
          >
            create trip
          </Button>
        )}
      </Center>
    </Flex>
  );
};

export default Footer;
