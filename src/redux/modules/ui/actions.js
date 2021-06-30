import MODULE_NAME from "./constants";

export const THEME_CHANGED = `${MODULE_NAME}/THEME_CHANGED`;

export const changeTheme = theme => ({
  type: THEME_CHANGED,
  payload: {
    theme
  }
});
