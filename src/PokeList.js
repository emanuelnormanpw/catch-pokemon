import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/css";
import { VariablesContext } from "./contexts/variables";
import PokeCard from "./components/PokeCard";

const PokeList = ({ dataPokemon }) => {
  const data = JSON.parse(localStorage.getItem("data"));
  const [arrData, setArrData] = useState();
  const [localData, setlocalData] = useState();
  const { variables } = useContext(VariablesContext);

  const groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  useEffect(() => {
    //Prevent Local Storage Null
    if (data) {
      const grouped = groupBy(data, "pokeType");
      const arr = [];
      setArrData(arr.push(grouped));
      setlocalData(arr);
    }
  }, [arrData]);

  return (
    <div
      className={css`
        margin: 0px 16px;
        padding: 30px 0px;
      `}
    >
      <ul
        className={css`
          ${variables.card.wrapper}
        `}
      >
        {dataPokemon.pokemons.results.map((item) => (
          <PokeCard key={item.id} image={item.image} item={item} localData={localData}></PokeCard>
        ))}
      </ul>
    </div>
  );
};

export default PokeList;
