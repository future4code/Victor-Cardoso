import { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/pokeCard/PokeCard";
import { Main, Heading2 } from "./globalStyle";

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
      .then((res) => {
        // console.log(res.data.results);
        setPokeList(res.data.results);
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
  }, []);

  return (
    // TO DO: select with pokemon names
    // TO DO: render pokeList map
    <Main>
      <Heading2>{title}</Heading2>
      <select name="" id="" onChange={onChangePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      <PokeCard pokemon={pokeName} />
    </Main>
  );
};

export default App;
