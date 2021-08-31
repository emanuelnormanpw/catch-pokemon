import React, { useContext } from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import { VariablesContext } from "../contexts/variables";

const NavbarPoke = () => {
  const { variables } = useContext(VariablesContext);

  return (
    <div
      className={css`
        padding: 8px 0px;
        width: 100%;
        background-color: ${variables.navbar.bg_navbar};
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
      <div
        className={css`
          @media (max-width: 768px) {
            display: none;
          }
          display: flex;
          margin: 8px 16px;
          justify-content: center;
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: center;
            width: 50%;
          `}
        >
          <Link to="/">
            <div
              className={css`
                width: 50px;
                height: 50px;
                border-radius: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #fff;
              `}
            >
              <img
                className={css`
                  width: 28px;
                `}
                src={process.env.PUBLIC_URL + "/images/pokeball_icon.svg"}
                alt=""
              />
            </div>
          </Link>
        </div>

        <div
          className={css`
            display: flex;
            justify-content: center;
            width: 50%;
          `}
        >
          <Link to="/inventory">
            <div
              className={css`
                width: 50px;
                height: 50px;
                border-radius: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #fff;
              `}
            >
              <img
                className={css`
                  width: 28px;
                `}
                src={process.env.PUBLIC_URL + "/images/bag.svg"}
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarPoke;
