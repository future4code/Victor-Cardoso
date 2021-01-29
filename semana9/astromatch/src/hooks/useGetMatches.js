import { useEffect, useState } from "react";

import axios from "axios";

const useGetMatches = () => {
  const [matches, setMatches] = useState([]);

  // const getMatches = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-cardoso-epps/matches"
  //     );
  //     console.log(response.data.matches);
  //     setMatches(response.data.matches);
  //     console.log(matches);
  //   } catch (err) {
  //     throw new Error(err.message);
  //   }
  // };
  // useEffect(getMatches);
  // // console.log(matches);
  // return matches;

  useEffect(() => {
    const getMatches = () => {
      axios
        .get(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-cardoso-epps/matches"
        )
        .then((response) => {
          console.log(response.data.matches);
          setMatches(response.data.matches);
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    };

    getMatches();
  }, []);

  return matches;
};

export default useGetMatches;
