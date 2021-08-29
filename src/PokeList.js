import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import { VariablesContext } from "./contexts/variables";

const PokeList = ({ dataPokemon }) => {
  const data = JSON.parse(localStorage.getItem("data"));
  const [localData, setlocalData] = useState();
  const { variables } = useContext(VariablesContext);

  const groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  useEffect(() => {
    const grouped = groupBy(data, "pokeType");
    const arr = [];
    arr.push(grouped);
    setlocalData(arr);
  }, []);

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
          <li
            className={css`
              &:hover {
                ${variables.card.hover}
              }
            `}
            key={item.id}
          >
            <Link
              className={css`
                ${variables.card.card}
              `}
              to={`/detail/${item.name}`}
            >
              <div>
                <div
                  className={css`
                    ${variables.card.body}
                  `}
                >
                  <div
                    className={css`
                      ${variables.card.header}
                    `}
                  >
                    <img
                      className={css`
                        ${variables.card.img}
                      `}
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div
                    className={css`
                      border-radius: 16px 16px 0px 0px;
                      padding: 28px;
                      background-color: #f7cc19;
                    `}
                  ></div>
                  <div
                    className={css`
                      ${variables.card.content}
                    `}
                  >
                    <h1
                      className={css`
                        text-transform: uppercase;
                      `}
                    >
                      {item.name}
                    </h1>
                    <span
                      className={
                        "font-bold " +
                        css`
                          margin: 0px 8px;
                          color: black;
                          padding: 8px;
                          border-radius: 8px;
                          width: 100%;
                          background-color: white;
                        `
                      }
                    >
                      YOU'VE
                    </span>
                    <span
                      className={
                        "font-bold " +
                        css`
                          margin: 0px 8px;
                          color: black;
                          padding: 8px;
                          border-radius: 8px;
                          width: 100%;
                          background-color: white;
                        `
                      }
                    >
                      {localData === undefined
                        ? "-"
                        : localData[0][`${item.name}`] !== undefined
                        ? localData[0][`${item.name}`].length
                        : "0"}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokeList;
