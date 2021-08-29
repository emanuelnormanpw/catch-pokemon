import React, { useContext } from "react";
import { css } from "@emotion/css";
import { VariablesContext } from "./contexts/variables";

const NavbarPoke = () => {
  const { variables } = useContext(VariablesContext);

  return (
    <div
      className={css`
        ${variables.footer_mobile}
      `}
    >
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          color: black;
        `}
      >
        <div
          className={css`
            padding: 24px;
            border-radius: 50px;
            width: 19px;
            background-color: white;
            box-shadow: 0px 0px 10px 8px #f5c600;
          `}
        >
          asd
        </div>
      </div>
    </div>
  );
};

export default NavbarPoke;
