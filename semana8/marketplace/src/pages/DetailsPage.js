import React from "react";
import axios from "axios";
import {
  Flex,
  Heading,
  Text,
  Box,
  Button,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import imgDetails from "../img/imgDetails.png";

const DetailsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartRef = React.useRef();

  const getCar = async () => {
    try {
      const response = await axios.get("link da api");
      return response;
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <Flex direction="column" w="100vw" h="80vh">
      {" "}
      {/* página */}
      <Flex w="100%" justifyContent="space-between" alignItems="center">
        <Flex
          w="50vw"
          h="100%"
          paddingX="2rem"
          direction="column"
          justifyContent="space-between"
        >
          <Heading fontSize="36px" p="2rem">
            Detalhes do produto
          </Heading>

          <Box h="100%">
            <Heading paddingY="1rem" fontSize="24" as="h3">
              Marca/Modelo:{" "}
            </Heading>
            <Heading paddingY="1rem" fontSize="24" as="h3">
              Descrição:{" "}
            </Heading>
            <Heading paddingY="1rem" fontSize="24" as="h3">
              Valor:{" "}
            </Heading>
            <Heading paddingY="1rem" fontSize="24" as="h3">
              Data de entrega:{" "}
            </Heading>
            <Heading paddingY="1rem" fontSize="24" as="h3">
              Métodos de pagamento
            </Heading>
          </Box>

          <Button
            ref={cartRef}
            onClick={onOpen}
            margin="1rem"
            alignSelf="flex-end"
            colorScheme="brand.900"
          >
            Comprar
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            finalFocusRef={cartRef}
          >
            <DrawerOverlay>
              <DrawerContent bgColor="bluePalette.900">
                <DrawerCloseButton />
                <DrawerHeader>Carrinho</DrawerHeader>
                <DrawerBody>
                  <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Asperiores, eligendi!
                  </Text>
                </DrawerBody>
                <DrawerFooter>
                  <Button colorScheme="button" mr={3} onClick={onClose}>
                    Finalizar Compra
                  </Button>
                  <Button colorScheme="button">Limpar Carrinho</Button>
                </DrawerFooter>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Flex>

        <Box w="50vw">
          <Image src={imgDetails} alt="" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default DetailsPage;
