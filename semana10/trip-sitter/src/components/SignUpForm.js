import { Box, Flex, Heading, Input, FormLabel, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    const user = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-epps/signUp",
        user
      );
      console.log(user);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <Flex h="100%" alignItems="center">
      <Box
        as="form"
        w="100%"
        maxH="400px"
        padding="1.5rem"
        borderRadius="5px"
        border="1px solid white"
      >
        <Heading textAlign="center">Sign Up</Heading>
        <FormLabel>email</FormLabel>
        <Input
          marginBottom="1rem"
          bgColor="rgba(247, 255, 247, 0.08)"
          _focus={{
            bgColor: "rgba(247, 255, 247, 0.3)",
          }}
          _hover={{
            bgColor: "rgba(247, 255, 247, 0.3)",
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel>password</FormLabel>
        <Input
          marginBottom="1rem"
          bgColor="rgba(247, 255, 247, 0.08)"
          _focus={{
            bgColor: "rgba(247, 255, 247, 0.3)",
          }}
          _hover={{
            bgColor: "rgba(247, 255, 247, 0.3)",
          }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          isLoading
          colorScheme="yellowTrip"
          color="blackTrip.100"
          fontSize="1.2rem"
          fontWeight="600"
          _hover={{ color: "yellowTrip.700", bgColor: "purpleTrip.400" }}
          _active={{ color: "yellowTrip.500", bgColor: "purpleTrip.200" }}
          onClick={() => registerUser()}
        >
          Sign Up
        </Button>
      </Box>
    </Flex>
  );
};

export default SignUpForm;
