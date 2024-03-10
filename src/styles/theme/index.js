const COLOR_MODE_KEY = "color-mode";
const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";
const COLORS = {
  "color-text": {
    light: "hsl(0, 0%, 20%)",
    dark: "hsl(216, 26%, 96%)",
  },
  "color-background": {
    light: "hsl(216, 26%, 96%)",
    dark: "hsl(225, 100%, 9%)",
  },
  "color-background-inverted": {
    light: "hsl(225, 100%, 9%)",
    dark: "hsl(216, 26%, 96%)",
  },
  "color-primary": {
    light: "hsl(221, 94%, 40%)",
    dark: "hsl(230, 46%, 20%)",
  },
  "color-primary-inverted": {
    light: "hsl(230, 46%, 20%)",
    dark: "hsl(221, 94%, 40%)",
  },
  "button-color-background": {
    light: "hsl(221, 94%, 40%)",
    dark: "hsl(221, 94%, 40%)",
  },
  "button-color-text": {
    light: "hsl(216, 26%, 96%)",
    dark: "hsl(216, 26%, 96%)",
  },
};

const themeConfig = {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
};

export default themeConfig;
