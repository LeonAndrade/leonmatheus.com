const COLOR_MODE_KEY = "color-mode";
const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";
const COLORS = {
  foreground: {
    light: "hsl(208, 82%, 10%)",
    dark: "hsl(208, 40%, 96%)",
  },
  background: {
    light: "hsl(208, 40%, 96%)",
    dark: "hsl(208, 82%, 10%)",
  },
  "blue-strong": {
    light: "hsl()",
    dark: "hsl(208, 41%, 25%)",
  },
  "blue-soft": {
    light: "hsl()",
    dark: "hsl()",
  },
  "yellow-strong": {
    light: "hsl()",
    dark: "hsl()",
  },
  "yellow-soft": {
    light: "hsl()",
    dark: "hsl()",
  },
  "green-strong": {
    light: "hsl()",
    dark: "hsl()",
  },
  "green-soft": {
    light: "hsl()",
    dark: "hsl()",
  },
};

const themeConfig = {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
};

export default themeConfig;
