import React from "react";
import { Section, Text } from "./styles.js";

const PokeCard = (props) => {
  return (
    <Section>
      <Text>Name: {props.name}</Text>
      <Text>Img: {props.img}</Text>
      <Text>Weight: {props.weight}</Text>
    </Section>
  );
};

export default PokeCard;
