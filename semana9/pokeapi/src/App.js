import { useState } from "react";
import PokeCard from "./components/pokeCard/PokeCard";
import { Main, Heading2 } from "./globalStyle";

const App = () => {
  const title = "pokeList";
  const [pokeList, setPokeList] = useState([]);
  const [pokemon, setPokemon] = useState(null);

  // TO DO: onChangePokemon

  // TO DO: getPokeList

  // TO DO: useEffect with getPokeList

  return (
    // TO DO: select with pokemon names
    // TO DO: render pokeList map
    <Main>
      <Heading2>{title}</Heading2>
      <PokeCard />
    </Main>
  );
};

export default App;
