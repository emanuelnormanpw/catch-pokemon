import { createContext, useState } from "react";
export const VariablesContext = createContext();

const VariablesContextProvider = (props) => {
  const primary = "#f7cc19";
  const primaryHover = "#ceab19";
  const secondary = "red";
  const secondaryHover = "red";

  function media(breakpoint, style) {
    return `@media (max-width: ${breakpoint}px){${style}}`;
  }

  const card_wrapper = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        ${media(720, "grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));")};
        gap: 2rem;
        padding: 0;
        list-style-type: none;
    `;

  const card_pokemon_list = `
        position: relative;
        display: block;
        height: 100%;  
        border-radius: 40px;
        text-decoration: none;
    `;

  const card_hover = `
        border: none;
        border-radius: 30px;
        box-shadow: 0 -3px 31px 0 #f7cc19;
    `;

  const card_body = `
        flex: 1 1 auto;
        border-radius: 30px;
    `;

  const card_header = `
        display: flex;
        position: absolute;
        left: 50%;
`;

  const card_content = `
        border-radius: 0px 0px 30px 30px;
        padding: 40px 16px 30px 16px;
        background-color: #0f0f0f;
        color: white;
        min-width: 200px;
  `;

  const card_img = `
        position: relative;
        left: -50%;
  `;

  const err404 = `
        display: flex; 
        justify-content: center;  
        align-items: center; 
        height: calc(100vh - 154px);
        ${media(720, "height: calc(100vh - 275px);")};
    `;
  const err404Img = `
        width: 100%;
        max-width: 300px;
        margin: 24px 0px;
    `;

  const btn = `
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
    `;

  const btn_primary = `
        ${btn}
        color: #465ee4;
        background-color: ${primary};
        border-color: ${primary};
    `;

  const btn_primary_hover = `
        background-color: ${primaryHover};
        border-color: ${primaryHover};
    `;

  const footer_mobile = `
        ${media(720, "display: block;")};
        display: none;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        color: white;
        text-align: center;
        height: 80px;
  `;

  const bg_navbar = "linear-gradient(to top, rgb(0 0 0 / 0%), rgb(251 222 68 / 100%))";
  const poke_loading = "width: 80px; height: auto;";

  const [variables] = useState({
    primary: primary,
    secondary: secondary,

    btn_primary: btn_primary,
    btn_primary_hover: btn_primary_hover,

    err404: {
      wrapper: err404,
      img: err404Img,
    },
    loading: poke_loading,
    navbar: {
      bg_navbar: bg_navbar,
    },
    text: {
      primary: {
        color: primary,
        hover: primaryHover,
      },
      secondary: {
        color: secondary,
        hover: secondaryHover,
      },
    },
    card: {
      wrapper: card_wrapper,
      card: card_pokemon_list,
      header: card_header,
      img: card_img,
      content: card_content,
      body: card_body,
      hover: card_hover,
    },
    footer_mobile: footer_mobile,
  });
  return <VariablesContext.Provider value={{ variables }}>{props.children}</VariablesContext.Provider>;
};

export default VariablesContextProvider;
