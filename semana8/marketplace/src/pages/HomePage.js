import {
  Flex,
  Heading,
  Box,
  Text,
  Image,
  Button,
  Slider,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import Bugatti from "../img/Bugatti3.jpg";
import Bugatti3 from "../img/bugattiDeTres.jpg";
import Corolla from "../img/corolla.jpg";
import Ram from "../img/pickupFzda.jpg";
import Bmw from "../img/bmw.jpg";
import Bentley from "../img/Bentley.jpg";
import Tiguan from "../img/tiguan.jpg";
import Popular from "../img/popular.jpg";
import Pickup from "../img/pickup.jpg";
import Minivan from "../img/minivan.jpg";
import Esportivo from "../img/esportivo.jpg";
import Luxo from "../img/luxo.jpg";

// import CategoryCard from "./CategoryCard";
//import Categories from "../components/home/Categories";

class HomePage extends React.Component {
  render() {
    return (
      <Flex direction="column" background="#ffffff" paddingBottom="4rem">
        {/* IMAGEM GRANDE DE CARRO COM BOTÃO E FRASE DE CHAMADA */}
        <Flex
          minW="100%"
          h="auto"
          direction="column"
          justify="center"
          bgPos="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgImage={`url('${Bugatti}')`}
        >
          <Box w="100vw" h="85vh">
            <Flex h="90%" direction="column" padding="3rem" paddingTop="6rem">
              <Heading
                as="h1"
                fontFamily="'Poppins', sans-serif"
                fontWeight="900"
                color="#EF6F6C"
                fontSize="72px"
                textAlign="right"
                textShadow="1px 1px 3px #000000"
              >
                FUTURECAR
              </Heading>

              <Heading
                fontSize="36px"
                as="h3"
                textShadow="1px 1px 3px #000000"
                textAlign="right"
              >
                GOING BEYOND
              </Heading>
              <Button
                alignSelf="flex-end"
                size="lg"
                marginTop="2rem"
                colorScheme="button"
                onClick={() => this.setState({ page: "products" })}
              >
                Saiba mais
              </Button>
            </Flex>
          </Box>
        </Flex>

        {/* 1 RETANGULO - VINHETA   */}

        <Flex w="100%" h="250px">
          <Text
            w="90%"
            h="91%"
            color="#000000"
            textAlign="center"
            paddingLeft="8%"
            paddingTop="3%"
            fontSize="44px"
            fontWeight="600"
          >
            <p>O carro de seus sonhos está tão perto!</p>
            <p> Vamos dizer ........ a somente 2 cliques.</p>
          </Text>
        </Flex>

        {/* 1 RETANGULO - com 2 div - div-1 com dizeres  div-2 com imagem */}

        {/* 1 RETANGULO - com 2 div - div-1 com dizeres  div-2 com imagem */}

        <Box w="100%" h="400" background="#ffffff">
          {/* ESPAÇO EM BRANCO - SEPARADOR   */}
          <Heading w="100%" h="10px" />

          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={0}
            w="95%"
            h="350px"
            marginLeft="2%"
            color="#000000"
            textAlign="justify"
            fontWeight="500"
            fontSize="16px"
          >
            <Box w="100%" h="350px">
              <Box
                w="78%"
                h="60%"
                marginTop="10%"
                marginLeft="12%"
                fontSize="30px"
              >
                Reestilização da Tiguan 2021 traz novas tecnologias e inédita
                versão híbrida.
              </Box>
            </Box>

            <Box w="100%" h="350px">
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Tiguan}
                alt="Cafro do mês"
              />
            </Box>
          </Grid>
        </Box>

        {/* ESPAÇO EM BRANCO - SEPARADOR   */}
        <Heading w="100%" h="50px" />

        {/* 5 RETANGULOS COM IMAGENS DAS CATEGORIAS OFERECIDAS */}

        <Box w="100%" h="350px" background="#ffffff">
          <Heading
            w="100%"
            h="120px"
            color="#EB4A47"
            textAlign="center"
            padding="2%"
          >
            Categoria de veículos
          </Heading>
          <Grid
            templateColumns="repeat(5, 1fr)"
            gap={6}
            w="95%"
            h="300px"
            marginLeft="2%"
            color="#EB4A47"
            textAlign="center"
            fontWeight="600"
            fontSize="22px"
          >
            <Box w="100%" h="170px">
              <Text>Esportivos</Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Esportivo}
                alt="Cafro do mês"
              />
            </Box>

            <Box w="100%" h="170px">
              <Text>Populares</Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Popular}
                alt="Cafro do mês"
              />
            </Box>

            <Box w="100%" h="170px">
              <Text>Pickup</Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Pickup}
                alt="Cafro do mês"
              />
            </Box>

            <Box w="100%" h="170px">
              <Text>Microvan</Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Minivan}
                alt="Cafro do mês"
              />
            </Box>

            <Box w="100%" h="170px">
              <Text>Super Luxo</Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Luxo}
                alt="Cafro do mês"
              />
            </Box>
          </Grid>
        </Box>

        {/* 2 FILERAS COM TRÊS IMAGENS *** DESTAQUES DO MÊS *** */}
        <Box w="100%" h="450px" background="#ffffff">
          <Heading
            w="100%"
            h="90px"
            color="#EB4A47"
            textAlign="center"
            padding="2%"
          >
            Destaques do mês
          </Heading>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={6}
            w="95%"
            h="450px"
            marginLeft="2%"
            color="#000000"
            textAlign="center"
            fontWeight="500"
            fontSize="16px"
          >
            <Box w="100%" h="250px">
              <Text>
                Bugatti Veyron ano 2016, 12.000 km, revisões em dia, Ipva 2021
                pago. Preço: R$ 4.358.000,00
              </Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Bugatti3}
                alt="Cafro do mês"
              />
            </Box>

            <Box w="100%" h="250px">
              <Text>
                Bentley Continental - ano 2015 – 4.0 GT gasolina 4 portas
                automático R$ 1.200.000,00
              </Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Bentley}
                alt="Cafro do mês"
              />
            </Box>

            <Box w="100%" h="250px">
              <Text>
                Novo Toyota Corolla Altis Premium Hibrido - 20/21 Automático 0km
                - R$143.870,00
              </Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Corolla}
                alt="Cafro do mês"
              />
            </Box>
          </Grid>
        </Box>

        <Box w="100%" h="600" background="#ffffff">
          {/* ESPAÇO EM BRANCO - SEPARADOR   
          <Heading w="100%" h="20px" />*/}

          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={6}
            w="95%"
            h="300px"
            marginLeft="2%"
            color="#000000"
            textAlign="center"
            fontWeight="500"
            fontSize="16px"
          >
            <Box w="100%" h="280px">
              <Text>
                RAM 2500 ano 2021 capacidade de carga 1.350 kg cambio automático
                motor híbrido preço R$ 420.000
              </Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Ram}
                alt="Cafro do mês"
              />
            </Box>

            <Box w="100%" h="280px">
              <Text>
                BMW Z4 carro esportivo, conversível, dupla capota, com 6.500 km
                gasolina 2 portas R$ 380.000,00
              </Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Bmw}
                alt="Carro do mês"
              />
            </Box>
          </Grid>
        </Box>

        <Heading w="100%" h="20px" />
      </Flex>
    );
  }
}

export default HomePage;
