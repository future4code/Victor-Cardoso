import React, { Component } from "react";
import { Flex, Image, Button, Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import DetailsPage from "../pages/DetailsPage";
import RegisterProductPage from "../pages/RegisterProductPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import Header from "../components/header/NavBar";
import Footer from "../components/footer/Footer";
import Logo from "../img/logo1.svg";

export class AppContainer extends Component {
  state = {
    page: "home",
  };

  goToHome = () => {
    this.setState({ page: "home" });
  };
  goToProducts = () => {
    this.setState({ page: "products" });
  };
  goToRegister = () => {
    this.setState({ page: "register" });
  };

  render() {
    const changePages = () => {
      switch (this.state.page) {
        case "home":
          return <HomePage />;
        case "products":
          return <ProductsPage />;
        case "details":
          return <DetailsPage />;
        case "register":
          return <RegisterProductPage />;
        default:
          return <HomePage />;
      }
    };
    return (
      <Flex
        as="main"
        h="100%"
        w="100vw"
        direction="column"
        align="center"
        justify="space-between"
        fontFamily="'Montserrat', sans-serif"
      >
        <Header>
          <Image src={Logo} />
          <Box as="nav">
            <Button colorScheme="button" onClick={this.goToHome}>
              Home
            </Button>
            <Button colorScheme="button" onClick={this.goToProducts}>
              Produtos
            </Button>
          </Box>
          <Button
            rightIcon={<AddIcon w="4" h="4" />}
            bgColor="transparent"
            paddingX="1.5rem"
            variant="outline"
            _hover={{
              bgColor: "bluePalette.900",
              borderColor: "bluePalette.900",
            }}
            onClick={this.goToRegister}
          >
            Registrar
          </Button>
        </Header>

        {changePages()}
        {/* <DetailsPage /> */}

        <Footer />
      </Flex>
    );
  }
}
