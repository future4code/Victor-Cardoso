import { Box, Flex, Heading, Input, FormLabel, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { getToken, setToken } from "../hooks/useToken";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { handleSubmit, errors, register } = useForm();

  useEffect(() => {
    const token = getToken();
    token && history.push("/dashboard/trips");
  }, [history]);

  const onSubmit = () => {
    signInUser();
  };

  const signInUser = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-epps/login",
        user
      )
      .then((response) => {
        console.log(response.data.token);
        setToken(response.data.token);
        window.location.reload();
        history.push("/dashboard/trips");
      })
      .catch((err) => {
        throw new Error(err);
      });
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
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading textAlign="center">Sign In</Heading>
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
          name="email"
          type="email"
          ref={register({ required: true })}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>erro no email</span>}

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
          name="password"
          type="password"
          ref={register({ required: true, minLength: 6 })}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span>erro na senha</span>}

        <Button
          colorScheme="yellowTrip"
          color="blackTrip.100"
          fontSize="1.2rem"
          fontWeight="600"
          _hover={{ color: "yellowTrip.700", bgColor: "purpleTrip.400" }}
          _active={{ color: "yellowTrip.500", bgColor: "purpleTrip.200" }}
          type="submit"
        >
          Sign In
        </Button>
      </Box>
    </Flex>
  );
};

export default LoginForm;
