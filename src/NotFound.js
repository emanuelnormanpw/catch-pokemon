import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";
import { VariablesContext } from "./contexts/variables";

const NotFound = () => {
  const { variables } = useContext(VariablesContext);
  return (
    <div className="not-found">
      <div
        className={css`
          ${variables.err404.wrapper}
        `}
      >
        <div>
          <img
            className={css`
              ${variables.err404.img}
            `}
            src={process.env.PUBLIC_URL + "/images/page-not-found.svg"}
            alt=""
          />
          <div>
            <Link
              className={css`
                ${variables.btn_primary} &:hover {
                  ${variables.btn_primary_hover}
                }
              `}
              to="/"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
