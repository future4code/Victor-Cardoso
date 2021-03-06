import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { goToFeed, goToSignAddress, goToSignUp } from "../routing/Coordinator";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { base_url } from "../constants";
import AuthContext from "../contexts/authContext";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { handleSubmit, register } = useForm();
  const history = useHistory();
  const { authSetters } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      goToFeed(history);
    }
  }, [history]);

  const login = async (body, history) => {
    try {
      const response = await axios.post(`${base_url}/login`, body);
      localStorage.setItem("token", response.data.token);
      console.log(response.data);

      authSetters.setToken(response.data.token);
      authSetters.setToken(response.data.user);
      if (!response.data.user.hasAddress) {
        goToSignAddress(history);
      } else {
        goToFeed(history);
      }
    } catch (err) {
      console.error(err.response.data.message);
      throw new Error(err.response.data.message);
    }
  };

  const onSubmitForm = (data) => {
    login(data, history);
  };

  return (
    <Flex as="main" w="100vw" h="100vh" direction="column" align="center">
      <Box as="form" onSubmit={handleSubmit(onSubmitForm)}>
        <Box as="span" padding="4">
          <Text
            fontSize="48px"
            fontWeight="400"
            lineHeight="0.9"
            alignSelf="flex-end"
          >
            Future
          </Text>
          <Text
            fontSize="48px"
            fontWeight="700"
            lineHeight="0.9"
            alignSelf="flex-end"
            color="greenPalette.400"
          >
            Eats
          </Text>
        </Box>
        <FormControl isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input
            placeholder="Digite seu e-mail"
            color="neutralPalette.900"
            borderColor="neutralPalette.500"
            size="lg"
            type="email"
            name="email"
            ref={register({ required: true })}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Senha</FormLabel>
          <InputGroup size="md">
            <Input
              placeholder="Digite sua senha"
              color="neutralPalette.900"
              borderColor="neutralPalette.500"
              size="lg"
              name="password"
              ref={register({ required: true })}
              type={show ? "text" : "password"}
            />
            <InputRightElement width="4.5rem">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                margin="normal"
                h="1.75rem"
                size="sm"
                onClick={handleClick}
              >
                {show ? "Esconder" : "Mostrar"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          type="submit"
          variant="solid"
          fontSize="20px"
          marginTop="6"
          w="100%"
        >
          Entrar
        </Button>
      </Box>
      <Button
        onClick={() => goToSignUp(history)}
        type={"submit"}
        variant={"text"}
        color={"primary"}
        margin={"normal"}
      >
        Cadastre-se
      </Button>
    </Flex>
  );
};

export default LoginForm;
