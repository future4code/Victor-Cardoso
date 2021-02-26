import React from "react";
import { Flex } from "@chakra-ui/react";

import Header from "../components/Header";
import Details from "../components/Details";

const Post = () => {
  return (
    <Flex w="100vw" align="center" justify="center" direction="column">
      <Header />
      <Details />
    </Flex>
  );
};

export default Post;
