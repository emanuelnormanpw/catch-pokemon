import React, { useContext, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { css } from "@emotion/css";
import { VariablesContext } from "./contexts/variables";
import PokeList from "./PokeList";

const POKEMON_LIST = gql`
  query pokemons {
    pokemons(offset: 0) {
      results {
        id
        name
        url
        image
      }
    }
  }
`;

const Homepage = () => {
  const { variables } = useContext(VariablesContext);
  const [getData, { loading, error, data }] = useLazyQuery(POKEMON_LIST);

  useEffect(() => {
    getData();
  });
  return (
    <div className="homepage">
      {error && <div>!!Error!!</div>}
      {loading && (
        <div
          className={css`
            display: flex;
            justify-content: center;
            height: calc(100vh - 154px);
            align-items: center;
          `}
        >
          <img
            className={css`
              ${variables.loading}
            `}
            src="./images/pokeball_loading.gif"
            alt=""
          />
        </div>
      )}
      {data && <PokeList dataPokemon={data}></PokeList>}
    </div>
  );
};

export default Homepage;
