import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";
import { VariablesContext } from "../contexts/variables";

const PokeCard = ({ item, localData }) => {
  const { variables } = useContext(VariablesContext);

  return (
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
        to={`/detail/${item.name}/${item.id}`}
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
                  ? "0"
                  : localData[0][`${item.name}`] !== undefined
                  ? localData[0][`${item.name}`].length
                  : "0"}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PokeCard;
