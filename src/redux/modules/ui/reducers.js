import * as actions from "./actions";

const initialState = {
  theme: "default"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.THEME_CHANGED:
      return {
        ...state,
        theme: action.payload.theme
      };
    default:
      return state;
  }
};
