export const BLUE = "#3f599c";
export const BLUE_LIGHTER = "#4dc2d3";
export const WHITE = "#fff";
export const BLACK = "#333";
export const GREY = "#666";
export const GREY_LIGHTER = "#666";
export const GREEN = "#5ab911";
export const RED = "#e41c1c";
export const ORANGE = "#e48d1c";

export const palettes = {
  default: {
    foreground: GREY,
    background: WHITE
  },
  primary: {
    foreground: WHITE,
    background: BLUE
  },
  secondary: {
    foreground: WHITE,
    background: GREY
  },
  success: {
    foreground: WHITE,
    background: GREEN
  },
  alert: {
    foreground: WHITE,
    background: RED
  },
  warning: {
    foreground: WHITE,
    background: ORANGE
  }
};

const base_theme = {
  palettes: palettes
};

export const themes = {
  default: {
    ...base_theme
  }
};
