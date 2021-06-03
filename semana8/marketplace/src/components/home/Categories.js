import React from "react";
import { Flex, Heading, Grid, Box, Center } from "@chakra-ui/react";

const Categories = () => {
  return (
    <Flex as="article" direction="column" w="100%" h="100%">
      <Heading>Categories</Heading>
      <Center h="100%" w="100%">
        <Grid>
          <Box>Categoria 1</Box>
          <Box>Categoria 2</Box>
        </Grid>
      </Center>
    </Flex>
  );
};

export default Categories;
