import { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/pokeCard/PokeCard";
import { Main, Aside, Heading2, Select, Option } from "./globalStyle";

const App = () => {
  const title = "pokeList";
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  // TO DO: onChangePokemon
  const onChangePokeName = (event) => {
    setPokeName(event.target.value);
  };

  // TO DO: getPokeList
  const getPokeList = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        // console.log(res.data.results);
        setPokeList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // TO DO: useEffect with getPokeList
  useEffect(() => {
    getPokeList();
    return () => {
      // cleanup;
    };
  }, [pokeName]);

  return (
    // TO DO: select with pokemon names
    // TO DO: render pokeList map
    <Main>
      <Aside>
        <Heading2>{title}</Heading2>
        <Select name="" id="" onChange={onChangePokeName}>
          <Option value={""}>Nenhum</Option>
          {pokeList.map((pokemon) => {
            return (
              <Option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </Option>
            );
          })}
        </Select>
      </Aside>
      <PokeCard pokemon={pokeName} />
    </Main>
  );
};

export default App;
