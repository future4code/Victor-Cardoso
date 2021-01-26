import React from "react";
import { Section, Text } from "./styles.js";

const PokeCard = (props) => {
  // TO DO: useState pokemon object

  // TO DO: getPokemon

  // TO DO: useEffect to get PokemonByName

  return (
    <Section>
      <Text>Name: {props.name}</Text>
      <Text>Img: {props.img}</Text>
      <Text>Weight: {props.weight}</Text>
      <Text>Type: {props.type}</Text>
    </Section>
  );
};

export default PokeCard;
