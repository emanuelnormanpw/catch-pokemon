import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { css } from "@emotion/css";
import { VariablesContext } from "./contexts/variables";

const POKEMON_DETAIL = gql`
  query pokemon($pokename: String!) {
    pokemon(name: $pokename) {
      id
      name
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      message
      status
    }
  }
`;

const PokeDetail = (props) => {
  let history = useHistory();
  const [loading_catch, setLoadingCatch] = useState(false);
  const [isCatch, setIsCatch] = useState(false);
  const [namePokemon, setNamePokemon] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [catchMessage, setCatchMessage] = useState(false);
  // const [localData, setlocalData] = useState();
  const { pokename, idPokemon } = useParams();
  const { variables } = useContext(VariablesContext);
  const { loading, error, data } = useQuery(POKEMON_DETAIL, {
    variables: { pokename },
  });

  useEffect(() => {
    setTimeout(() => {
      setLoadingCatch(false);
    }, 3000);
  }, [loading_catch]);

  const catchPokemon = () => {
    setLoadingCatch(true);
    setCatchMessage(false);
    const rand = Math.random();
    if (rand > 0.5) {
      setIsCatch(true);
    } else {
      setIsCatch(false);
      setCatchMessage(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let arr = [];
    let localStrorage = JSON.parse(localStorage.getItem("data"));
    let lastID = 0;

    if (localStrorage) {
      let lastItem = localStrorage[localStrorage.length - 1];
      if (lastItem !== undefined) {
        lastID = parseInt(lastItem.id) + 1;
      }
    }

    let name = { id: `${lastID}`, id_pokemon: `${idPokemon}`, pokeType: `${pokename}`, name: `${namePokemon}` };

    if (localStrorage === null) {
      arr.push(name);
      localStorage.setItem("data", JSON.stringify(arr));
      history.push("/inventory");
    } else {
      // Find Duplicate Nickname
      let findDuplicateName = localStrorage.find(({ name }) => name === namePokemon);
      let findDuplicateType = localStrorage.find(({ pokeType }) => pokeType === pokename);

      if (findDuplicateName && findDuplicateType) {
        setErrMsg("Nickname is already taken");
      } else {
        setErrMsg("");
        arr = JSON.parse(localStorage.getItem("data"));
        arr.push(name);
        localStorage.setItem("data", JSON.stringify(arr));
        history.push("/inventory");
      }
    }
  };

  if (loading)
    return (
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
          src={process.env.PUBLIC_URL + "/images/pokeball_loading.gif"}
          alt=""
        />
      </div>
    );
  if (error)
    return (
      <div
        className={css`
          ${variables.err404.wrapper}
        `}
      >
        <img
          className={css`
            ${variables.err404.img}
          `}
          src={process.env.PUBLIC_URL + "/images/err-404.svg"}
          alt=""
        />
      </div>
    );

  if (loading_catch) {
    return (
      <div
        className={css`
          display: flex;
          justify-content: center;
          height: calc(100vh - 250px);
          align-items: center;
        `}
      >
        <img
          className={css`
            ${variables.loading}
          `}
          src={process.env.PUBLIC_URL + "/images/pokeball_open.gif"}
          alt=""
        />
      </div>
    );
  }
  if (data) {
    if (isCatch) {
      return (
        <div
          className={css`
            ${variables.container}
          `}
        >
          <form onSubmit={handleSubmit}>
            <h1
              className={css`
                color: ${variables.secondary};
              `}
            >
              !!POKEMON CATCHED!!
            </h1>
            <h2>Give a name:</h2>
            <div
              className={css`
                display: flex;
                justify-content: center;
              `}
            >
              <input
                type="text"
                className={css`
                  ${variables.form_input}
                  margin-bottom: 24px;
                  text-align: center;
                  &:focus {
                    outline: none;
                  }
                `}
                placeholder="Type a name"
                onChange={(e) => setNamePokemon(e.target.value)}
              />
            </div>
            <h4
              className={css`
                color: red;
              `}
            >
              {errMsg ? errMsg : ""}
            </h4>
            <button
              className={css`
                ${variables.btn_mobile}
                @media (max-width: 768px) {
                  margin: 8px 0px;
                }
                margin: 8px;
                ${variables.btn_primary}
              `}
              type="submit"
            >
              Save Pokemon
            </button>
            <Link
              to="/"
              className={css`
                @media (max-width: 768px) {
                  ${variables.btn_mobile}
                  padding: .375em 0px;
                  margin: 8px 0px;
                }
                margin: 8px;
                ${variables.btn_primary}
              `}
            >
              <span className="font-bold">Release Pokemon</span>
            </Link>
          </form>
        </div>
      );
    } else {
      return (
        <div
          className={css`
            ${variables.container}
          `}
        >
          {catchMessage && (
            <div
              className={css`
                padding: 8px 0px;
                margin-bottom: 8px;
                width: 100%;
                background-color: pink;
                border-radius: 6px;
              `}
            >
              Oops! Fail to catch pokemon
            </div>
          )}
          <div
            className={css`
              ${variables.box_shadow}
              background-color: #fff;
              border-radius: 20px;
            `}
          >
            <div
              className={css`
                ${variables.row}
                padding: 24px;
              `}
            >
              <div
                className={css`
                  ${variables.detail.image}
                  ${variables.col_6}
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <img
                  className={css`
                    width: 200px;
                  `}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`}
                  alt=""
                />
              </div>
              <div
                className={css`
                  ${variables.detail.content}
                  ${variables.col_6}
                `}
              >
                <h1
                  className={css`
                    text-transform: uppercase;
                    font-size: 50px;
                    color: #497723;
                  `}
                >
                  {data.pokemon.name}
                </h1>
                <h1>Type:</h1>
                <div
                  className={css`
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    flex-wrap: wrap;
                  `}
                >
                  {data.pokemon.types.map((item, index) => (
                    <span
                      className={css`
                        ${variables.small_label}
                      `}
                      key={index}
                    >
                      {item.type.name}
                    </span>
                  ))}
                </div>
                <h1>Moves:</h1>
                <div
                  className={css`
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    flex-wrap: wrap;
                  `}
                >
                  {data.pokemon.moves.map((item, index) => (
                    <span
                      className={css`
                        ${variables.small_label}
                      `}
                      key={index}
                    >
                      {item.move.name}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={css`
                  ${variables.detail.content}
                  ${variables.col_12}
                `}
              >
                <button
                  className={css`
                    ${variables.btn_primary}
                    ${variables.btn_mobile}
                    &:hover {
                      ${variables.btn_primary_hover}
                    }
                  `}
                  onClick={catchPokemon}
                >
                  CATCH POKEMON
                </button>
              </div>
            </div>
          </div>
          <div
            className={css`
              margin: 8px 0px;
              display: flex;
              justify-content: space-between;
            `}
          ></div>
        </div>
      );
    }
  }
};

export default PokeDetail;
