export const pokeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POKE":
      return [
        ...state,
        {
          id: `1`,
          name: action.poke.name,
        },
      ];
      break;

    default:
      break;
  }
};
