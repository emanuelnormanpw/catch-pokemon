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
            margin: 16px;
            padding: 10px;
            border-radius: 50px;
            width: 100%;
            height: 50px;
            background-color: ${variables.primary};
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <Link
            to="/"
            className={css`
              width: 50%;
            `}
          >
            <div>
              <img
                className={css`
                  width: 28px;
                `}
                src={process.env.PUBLIC_URL + "/images/pokeball_icon.svg"}
                alt=""
              />
            </div>
          </Link>
          <Link
            to="/inventory"
            className={css`
              width: 50%;
            `}
          >
            <div>
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
