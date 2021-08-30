import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";
import { VariablesContext } from "./contexts/variables";

const MyPokemon = () => {
  const [localData, setlocalData] = useState();
  const { variables } = useContext(VariablesContext);

  //   useEffect(() => {

  //   }, []);
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

  if (data.length != 0) {
    return (
      <div>
        Ada
        {data.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <button value={item.id} onClick={releasePokemon}>
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Tidak Punya Pokemon</h1>
        <Link
          to="/"
          className={css`
            ${variables.btn_primary} &:hover {
              ${variables.btn_primary}
            }
          `}
        >
          Catch A Pokemon
        </Link>
      </div>
    );
  }
};

export default MyPokemon;
