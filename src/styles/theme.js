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
  "post-shadow": {
    light: `
      0px 1px 2px hsl(50deg 20% 50% / 0.2),
      0px 2px 4px hsl(50deg 20% 50% / 0.2),
      0px 4px 8px hsl(50deg 20% 50% / 0.2),
      0px 8px 16px hsl(50deg 20% 50% / 0.2)
    `,
    dark: "none",
  },
};

const themeConfig = {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
};

export default themeConfig;
