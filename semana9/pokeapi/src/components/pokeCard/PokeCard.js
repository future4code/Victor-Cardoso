import React, { useEffect, useState } from "react";
import axios from "axios";
import { Section, Card, Heading3, Text, List, ListItem } from "./styles.js";

const PokeCard = (props) => {
  // TO DO: useState pokemon object
  const [pokemon, setPokemon] = useState({});

  // TO DO: getPokemon
  const getPokemonByName = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        // console.log(response.data);
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // TO DO: useEffect to get PokemonByName
  useEffect(() => {
    getPokemonByName(props.pokemon);
  }, [props.pokemon]);

  return (
    <Section>
      <Card>
        <Heading3>{pokemon.name}</Heading3>
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
        <div>
          <Text>
            Type:{" "}
            {pokemon.types && (
              <span>
                {pokemon.types[0].type.name}{" "}
                {pokemon.types[1] && " & " + pokemon.types[1].type.name}
              </span>
            )}
          </Text>
          <Text>Weight: {pokemon.weight}kg</Text>
          <Text>Height: {pokemon.height}"</Text>
          <Text>Moves:</Text>
          {pokemon.moves ? (
            <List>
              <ListItem>{pokemon.moves[0].move.name}</ListItem>
              <ListItem>{pokemon.moves[1].move.name}</ListItem>
              <ListItem>{pokemon.moves[2].move.name}</ListItem>
              <ListItem>{pokemon.moves[3].move.name}</ListItem>
            </List>
          ) : (
            ""
          )}
        </div>
      </Card>
    </Section>
  );
};

export default PokeCard;
