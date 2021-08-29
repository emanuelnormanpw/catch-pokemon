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

const PokeDetail = () => {
  let history = useHistory();
  const [loading_catch, setLoadingCatch] = useState(false);
  const [isCatch, setIsCatch] = useState(false);
  const [namePokemon, setNamePokemon] = useState("");
  const [localData, setlocalData] = useState();
  const { pokename } = useParams();
  const { variables } = useContext(VariablesContext);
  const { loading, error, data } = useQuery(POKEMON_DETAIL, {
    variables: { pokename },
  });

  useEffect(() => {
    setTimeout(() => {
      setLoadingCatch(false);
    }, 5000);
  }, [loading_catch]);

  useEffect(() => {
    setlocalData(JSON.parse(localStorage.getItem("data")));
  }, [namePokemon]);

  const catchPokemon = () => {
    setLoadingCatch(true);
    const rand = Math.random();
    if (rand > 0.1) {
      setIsCatch(true);
    } else {
      setIsCatch(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let arr = [];
    let isNull = localStorage.getItem("data");
    let name = { pokeType: `${pokename}`, name: `${namePokemon}` };

    if (isNull === null) {
      arr.push(name);
      localStorage.setItem("data", JSON.stringify(arr));
    } else {
      arr = JSON.parse(localStorage.getItem("data"));
      arr.push(name);
      localStorage.setItem("data", JSON.stringify(arr));
    }

    history.push("/");
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
      <div>
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
        <div>
          <h2>POKEMON is Catched!!</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setNamePokemon(e.target.value)} />
            <button>Add Pokemon</button>
          </form>
        </div>
      );
    } else {
      return (
        <div
          className={css`
            margin: 0px 16px;
            padding: 30px 0px;
          `}
        >
          <h1>Pokemon Name : {data.pokemon.name}</h1>
          <p>Ini: </p>
          <button
            className={css`
              ${variables.btn_primary}
            `}
            onClick={catchPokemon}
          >
            Catch Pokemon
          </button>
          <p>Pokemon Moves:</p>
          <div>
            {data.pokemon.moves.map((item, index) => (
              <p key={index}>{item.move.name}</p>
            ))}
          </div>
          <Link
            to="/"
            className={css`
              ${variables.btn_primary} &:hover {
                ${variables.btn_primary}
              }
            `}
          >
            Kembali
          </Link>
        </div>
      );
    }
  }
};

export default PokeDetail;
