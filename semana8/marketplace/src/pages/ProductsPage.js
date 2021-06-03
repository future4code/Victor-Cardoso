import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

import Products from "../components/products/Products";

const ProductsPage = () => {
  return (
    <Flex
      as="section"
      minW="80%"
      direction="column"
      justifyContent="space-between"
    >
      <Heading as="h2" padding="1rem">
        Produtos
      </Heading>
      <Products />
    </Flex>
  );
};

export default ProductsPage;
