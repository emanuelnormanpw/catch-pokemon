import { createContext, useState } from "react";
export const VariablesContext = createContext();

const VariablesContextProvider = (props) => {
  const primary = "#f7cc19";
  const primaryHover = "#efc723";
  const secondary = "#497723";
  const secondaryHover = "red";

  function media(breakpoint, style) {
    return `@media (max-width: ${breakpoint}px){${style}}`;
  }

  const card_wrapper = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        ${media(768, "grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));")};
        gap: 2rem;
        padding: 0;
        list-style-type: none;
    `;

  const container = `
        margin: 0px 16px;
        padding: 30px 0px;
        ${media(768, "padding: 30px 0px 110px 0px;")};

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
        ${media(768, "height: calc(100vh - 275px);")};
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
        font-size: 1.1rem;
        line-height: 1.5;
        border-radius: 1rem;
    `;

  const form_input = `
        display: block;
        width: 100%;
        padding: .375rem 0px;
        font-size: 18px;
        line-height: 1.5;
        color: #495057;
        font-weight: bold;
        background-color: #fff;
        background-clip: padding-box;
        border: none;
        border-bottom: 2px solid ${primary};
    `;

  const btn_primary = `
        ${btn}
        color: black;
        background-color: ${primary};
        border-color: ${primary};
    `;

  const btn_primary_hover = `
        background-color: ${primaryHover};
        border-color: ${primaryHover};
    `;

  const footer_mobile = `
        ${media(
          768,
          `display: block;
          position: fixed;
          left: 0;
          bottom: 25px;
          width: 100%;
          color: white;
          text-align: center;
          height: 80px;`
        )};
        display: none;
  `;

  const row = `
        display: flex;
        flex-wrap: wrap;
        ${media(768, "display: block;")};
  `;

  const btn_mobile = `
      ${media(768, "width: 100%;")};
  `;

  const col_12 = `
        width: 100%; 
  `;

  const col_6 = `
        width: 50%; 
        ${media(768, "width: 100%;")};
  `;

  const card_detail_pokemon = `
        ${media(768, "border-radius: 16px 16px 0px 0px;")};
        border-radius: 16px 0px 0px 16px;
        padding: 16px 0px;
  `;

  const card_content_pokemon = `
        border-radius: 0px 16px 16px 0px;
        ${media(768, "border-radius: 0px 0px 16px 16px;")};
        padding: 16px 0px;
  `;

  const box_shadow = `
        box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
  `;

  const small_label = `
        border-radius: 8px;
        padding: 4px 8px;
        margin: 4px;
        color: #fff;
        background-color: ${secondary};
        font-weight: 600;
        text-transform: uppercase;
  `;

  const bg_navbar = `${primary}`;
  const poke_loading = "width: 80px; height: auto;";

  const [variables] = useState({
    primary: primary,
    secondary: secondary,

    btn_primary: btn_primary,
    btn_primary_hover: btn_primary_hover,

    btn_mobile: btn_mobile,

    container: container,

    err404: {
      wrapper: err404,
      img: err404Img,
    },

    loading: poke_loading,

    navbar: {
      bg_navbar: bg_navbar,
    },

    box_shadow: box_shadow,

    form_input: form_input,

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

    detail: {
      image: card_detail_pokemon,
      content: card_content_pokemon,
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

    small_label: small_label,

    footer_mobile: footer_mobile,
    row: row,
    col_6: col_6,
    col_12: col_12,
  });
  return <VariablesContext.Provider value={{ variables }}>{props.children}</VariablesContext.Provider>;
};

export default VariablesContextProvider;
