import React, { useContext } from "react";
import { css } from "@emotion/css";
import { VariablesContext } from "../contexts/variables";
import { Link } from "react-router-dom";

const NavbarPoke = () => {
  const { variables } = useContext(VariablesContext);

  return (
    <div
      className={css`
        ${variables.footer_mobile}
      `}
    >
      <Link to="/">
        <div
          className={css`
            display: flex;
            justify-content: center;
            width: 100%;
            color: #f7cc19;
            font-weight: bold;
          `}
        >
          <div
            className={css`
              margin-bottom: 16px;
              padding: 10px;
              border-radius: 50px;
              width: 50px;
              height: 50px;
              background-color: green;
              box-shadow: 0px 0px 10px 8px #f5c600;
              display: flex;
              justify-content: center;
            `}
          >
            <img src={process.env.PUBLIC_URL + "/images/pokemon-logo.png"} alt="" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NavbarPoke;
