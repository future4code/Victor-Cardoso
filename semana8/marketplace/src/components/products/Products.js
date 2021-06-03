import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SimpleGrid,
  GridItem,
  Text,
  Flex,
  Heading,
  Input,
  Select,
  CloseButton,
  // Button,
  // Collapse,
  // useDisclosure,
} from "@chakra-ui/react";

class Products extends React.Component {
  state = {
    products: [],
    filterInput: "",
    maxPriceInput: "",
    minPriceInput: "",
    inputPrice: "",
  };

  componentDidMount = () => {
    this.getAllProducts();
  };

  onChangeStringFilter = (event) => {
    this.setState({ filterInput: event.target.value });
  };

  onChangeMaxPrice = (event) => {
    this.setState({ maxPriceInput: event.target.value });
  };

  onChangeMinPrice = (event) => {
    this.setState({ minPriceInput: event.target.value });
  };

  onChangePriceFilterNone = () => {
    this.setState({ inputPrice: "nenhum" });
  };

  onChangePriceFilterAscending = () => {
    this.setState({ inputPrice: "crescente" });
  };

  onChangePriceFilterDescending = () => {
    this.setState({ inputPrice: "decrescente" });
  };

  // Get Products
  getAllProducts = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo/cars"
      );
      this.setState({ products: response.data.cars });
    } catch (err) {
      console.log("Erro: ", err);
    }
  };

  // Delete Product
  deleteCar = async () => {
    try {
      const response = await axios.get();
      this.setState({ products: response.data.cars });
    } catch (err) {
      console.log("Erro: ", err);
    }
  };

  render() {
    // const { isOpen, onToggle } = useDisclosure();

    // Renderizar array de produtos

    // Filters
    const filteredProducts = this.state.products
      // Filtro de nome
      .filter((product) => {
        const lowerCaseName = product.name.toLowerCase();
        const lowerCaseDescription = product.description.toLowerCase();
        return (
          lowerCaseName.includes(this.state.filterInput) ||
          lowerCaseDescription.includes(this.state.filterInput)
        );
      })
      // Filtro por valor máximo
      .filter((product) => {
        if (this.state.maxPriceInput === "") return true;
        if (product.price <= this.state.maxPriceInput) return true;
      })
      //Filtro por valor mínimo
      .filter((product) => {
        if (this.state.minPriceInput === "") return true;
        if (product.price >= this.state.minPriceInput) return true;
      })
      // Ordenar produtos
      .sort((lower, higher) => {
        switch (this.state.inputPrice) {
          case "crescente":
            return lower.price - higher.price;
          case "decrescente":
            return higher.price - lower.price;
          default:
            return "nenhum";
        }
      });

    return (
      <Flex as="article" direction="column" w="100%" padding="2.5rem">
        <Flex paddingBottom="3rem" justify="space-between">
          <Input
            onChange={this.onChangeStringFilter}
            value={this.state.filterInput}
            placeholder="Filtrar nome/descrição"
            maxW="230px"
          />
          <Input
            onChange={this.onChangeMinPrice}
            value={this.state.minPriceInput}
            type="number"
            placeholder="Filtrar preço mínimo"
            maxW="230px"
          />
          <Input
            onChange={this.onChangeMaxPrice}
            value={this.state.maxPriceInput}
            type="number"
            placeholder="Filtrar preço máximo"
            maxW="230px"
          />
          <Select color="bluePalette.900">
            <option
              onClick={this.onChangePriceFilterNone}
              value={this.state.inputPrice}
            >
              Ordenar por:
            </option>
            <option
              onClick={this.onChangePriceFilterAscending}
              value={this.state.inputPrice}
            >
              Crescente
            </option>
            <option
              onClick={this.onChangePriceFilterDescending}
              value={this.state.inputPrice}
            >
              Decrescente
            </option>
          </Select>
        </Flex>

        <SimpleGrid h="100%" w="100%" minChildWidth="220px" spacing="3rem">
          {filteredProducts.map((product) => {
            return (
              <GridItem
                minH="300px"
                p="1rem"
                boxShadow="1px 3px 10px #202020"
                borderRadius="5px"
                key={product.id}
              >
                <Flex h="100%" direction="column" justify="space-around">
                  <CloseButton onClick={() => this.deleteCar()} />
                  <Heading as="h4" textAlign="center" fontSize="20px">
                    {product.name}
                  </Heading>
                  <Text fontSize="16px">Descrição: {product.description}</Text>
                  <Text fontSize="16px">Valor: R$ {product.price}</Text>
                  <Text fontSize="16px">
                    Método de pagamento: {product.paymentMethod}
                  </Text>
                </Flex>
              </GridItem>
            );
          })}
        </SimpleGrid>
        {/* <Button
        colorScheme="button"
        alignSelf="flex-start"
        onClick={() => onToggle()}
      >
        Detalhes
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <DetailsPage />
      </Collapse> */}
      </Flex>
    );
  }
}
export default Products;

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getAllProducts = async () => {
//       try {
//         const response = await axios.get(
//           "https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo/cars"
//         );
//         setProducts(response.data.cars);
//       } catch (err) {
//         console.log("Erro: ", err);
//       }
//     };
//     getAllProducts();
//     return () => {};
//   }, []);

//   return (
//     <SimpleGrid h="100%" w="100%" minChildWidth="220px" spacing="3rem">
//       {products.map((product) => {
//         return (
//           <GridItem
//             minH="300px"
//             p="1rem"
//             boxShadow="1px 3px 10px #202020"
//             borderRadius="5px"
//             key={product.id}
//           >
//             <Flex h="100%" direction="column" justify="space-around">
//               <Heading as="h4" textAlign="center" fontSize="20px">
//                 {product.name}
//               </Heading>
//               <Text fontSize="16px">Descrição: {product.description}</Text>
//               <Text fontSize="16px">Valor: R$ {product.price}</Text>
//               <Text fontSize="16px">
//                 Método de pagamento: {product.paymentMethod}
//               </Text>
//             </Flex>
//           </GridItem>
//         );
//       })}
//     </SimpleGrid>
//   );
// };

// export default Products;
