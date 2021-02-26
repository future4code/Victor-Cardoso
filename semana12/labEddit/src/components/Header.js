import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import React, { useContext, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../context/authContext";
import { goHome, goToFeed, goToLogin, goToRegister } from "../router/routes";

const Header = () => {
  const history = useHistory();
  const { states, setters } = useContext(AuthContext);
  const { colorMode, toggleColorMode } = useColorMode();

  const logoutBtn = (history) => {
    setters.logout();
    goHome(history);
  };

  useLayoutEffect(() => {
    setters.setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <Flex
      as="header"
      w="100vw"
      minH="80px"
      align="center"
      justify="space-around"
      paddingX={4}
      position="sticky"
    >
      {states.token ? (
        <>
          <Button onClick={() => goToFeed(history)}>Home</Button>
          {states.user && (
            <Heading as="h4" fontSize="18px">
              Olá {states.user.username}!
            </Heading>
          )}
          <IconButton onClick={toggleColorMode}>
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          </IconButton>
          <Button onClick={() => logoutBtn(history)}>Logout</Button>
        </>
      ) : (
        <>
          <Button onClick={() => goToRegister(history)}>register</Button>
          <Button onClick={() => goHome(history)}>Home</Button>
          <Button onClick={() => goToLogin(history)}>login</Button>
        </>
      )}
    </Flex>
  );
};

export default Header;
