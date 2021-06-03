import React, { Component } from "react";
import imgRegister from "../../img/imgRegister.jpg";
import axios from "axios";

import {
  Flex,
  Heading,
  Box,
  Input,
  Button,
  FormControl,
  Image,
} from "@chakra-ui/react";

class RegisterProductForm extends Component {
  state = {
    inputTitulo: "",
    inputDescricao: "",
    inputPreco: 0,
    inputDataEntrega: 0,
    inputMetodoPgto: "",
    product: {
      name: "",
      description: "",
      price: 0,
      paymentMethod: "",
      shipping: 0,
    },
  };

  // Métodos onChange para colocar valores dos inputs no state
  onChangeinputTitulo = (event) => {
    // this.state.titulo = inputMarca + inputModelo
    // this.state.titulo(imputMarca && inputModelo);
    // this.setState({ inputTitulo: this.state.titulo });
    this.setState({ inputTitulo: event.target.value });
  };
  onChangeinputDescricao = (event) => {
    this.setState({ inputDescricao: event.target.value });
  };
  onChangeinputPreco = (event) => {
    this.setState({ inputPreco: event.target.value });
  };
  onChangeinputDataEntrega = (event) => {
    this.setState({ inputDataEntrega: event.target.value });
  };
  onChangeinputMetodoPgto = (event) => {
    this.setState({ inputMetodoPgto: event.target.value });
  };

  // Cadastrar Produto na API com axios
  createProduct = async () => {
    const product = {
      name: this.state.inputTitulo,
      description: this.state.inputDescricao,
      price: this.state.inputPreco,
      paymentMethod: this.state.inputMetodoPgto,
      shipping: this.state.inputDataEntrega,
    };

    try {
      const response = await axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo/cars",
        product
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    this.setState({
      inputTitulo: "",
      inputDescricao: "",
      inputPreco: 0,
      inputDataEntrega: 0,
      inputMetodoPgto: "",
    });
    // console.log(product);
  };

  render() {
    return (
      <Flex
        as="section"
        // direction="column"
        w="100vw"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex
          as="article"
          direction="column"
          justifyContent="space-between"
          w="40vw"
          h="auto"
          padding="4rem 2rem"
        >
          <Heading>Formulário</Heading>

          <Box as="form" w="100%">
            <FormControl display="Flex" justifyContent="space-between" w="100%">
              <Input
                id="marca"
                placeholder="Marca"
                maxW="20vw"
                marginY="1rem"
                value={this.state.inputTitulo}
                onChange={this.onChangeinputTitulo}
              />
              {/* <Input
                id="modelo"
                placeholder="Modelo"
                maxW="20vw"
                marginY="1rem"
                value={this.state.inputTitulo}
              /> */}
            </FormControl>

            <Input
              id="valor"
              placeholder="Preço em R$"
              type="number"
              marginY="1rem"
              value={this.state.inputPreco}
              onChange={this.onChangeinputPreco}
            />

            <Input
              id="descricao"
              placeholder="Descrição"
              marginY="1rem"
              value={this.state.inputDescricao}
              onChange={this.onChangeinputDescricao}
            />

            <Input
              id="dataEntrega"
              placeholder="Data de entrega"
              marginY="1rem"
              value={this.state.inputDataEntrega}
              onChange={this.onChangeinputDataEntrega}
            />
            <Input
              id="MetodoPgto"
              placeholder="Métodos de Pagamento"
              marginY="1rem"
              value={this.state.inputMetodoPgto}
              onChange={this.onChangeinputMetodoPgto}
            />
          </Box>

          <Button
            colorScheme="button"
            alignSelf="flex-end"
            onClick={this.createProduct}
          >
            Cadastrar oferta
          </Button>
        </Flex>

        <Box
          as="aside"
          display="flex"
          justifyContent="space-around"
          alignSelf="flex-end"
          w="60vw"
          h="100%"
          /*marginY="5rem"*/
        >
          <Image src={imgRegister} alt="Opala-Diplomata-1990-da-Chevrolet" />
        </Box>
      </Flex>
    );
  }
}

export default RegisterProductForm;
