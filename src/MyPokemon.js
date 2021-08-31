import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";
import { VariablesContext } from "./contexts/variables";

const MyPokemon = () => {
  const [localData, setlocalData] = useState();
  const { variables } = useContext(VariablesContext);

  if (localStorage.getItem("data") === null) {
    localStorage.setItem("data", "[]");
  }

  const data = JSON.parse(localStorage.getItem("data"));

  const releasePokemon = (e) => {
    let key = e.target.value;
    const filtered = data.filter((item) => item.id !== key);
    localStorage.setItem("data", JSON.stringify(filtered));
    setlocalData(filtered);
  };

  if (data.length !== 0) {
    return (
      <div
        className={css`
          ${variables.container}
        `}
      >
        <div
          className={css`
            ${variables.card.wrapper}
          `}
        >
          {data.map((item) => (
            <div
              className={css`
                &:hover {
                  ${variables.card.hover}
                }
              `}
              key={item.id}
            >
              <div
                className={css`
                  ${variables.card.card}
                `}
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
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id_pokemon}.png`}
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
                      <button
                        className={css`
                          ${variables.btn_primary}
                        `}
                        value={item.id}
                        onClick={releasePokemon}
                      >
                        Release
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={css`
          display: flex;
          justify-content: center;
          height: calc(100vh - 154px);
          align-items: center;
          flex-wrap: wrap;
        `}
      >
        <div
          className={css`
            width: 100%;
            margin: 0px 4px;
          `}
        >
          <img
            className={css`
              width: 100%;
              max-width: 200px;
            `}
            src={process.env.PUBLIC_URL + "/images/empty_catch.png"}
            alt=""
          />
          <h1>You don't have pokemon</h1>
          <Link
            to="/"
            className={css`
              ${variables.btn_primary} &:hover {
                ${variables.btn_primary}
              }
            `}
          >
            <span className="font-bold">Catch Pokemon</span>
          </Link>
        </div>
      </div>
    );
  }
};

export default MyPokemon;
