import React, { useContext } from "react";
import { css } from "@emotion/css";
import { VariablesContext } from "../contexts/variables";

const NavbarPoke = () => {
  const { variables } = useContext(VariablesContext);

  return (
    <div
      className={css`
        padding: 8px 0px;
        width: 100%;
        background-image: ${variables.navbar.bg_navbar};
      `}
    >
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/pokemon-logo.png"}
          alt=""
          className={css`
            width: 60px;
            height: auto;
          `}
        />
      </div>
      <div>
        <h1>CATCH A POKEMON</h1>
      </div>
    </div>
  );
};

export default NavbarPoke;
