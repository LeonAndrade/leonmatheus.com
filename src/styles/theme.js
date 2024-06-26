const COLOR_MODE_KEY = "color-mode";
const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";
const COLORS = {
  gray_100: {
    light: "hsl(88, 0%, 93%)",
    dark: "hsl(88, 0%, 93%)",
  },
  gray_200: {
    light: "hsl(88, 20%, 93%)",
    dark: "hsl(88, 20%, 93%)",
  },
  gray_300: {
    light: "hsl(88, 40%, 80%)",
    dark: "hsl(88, 40%, 93%)",
  },
  gray_400: {
    light: "hsl(88, 0%, 93%)",
    dark: "hsl(88, 0%, 93%)",
  },
  gray_500: {
    light: "hsl(88, 0%, 93%)",
    dark: "hsl(88, 0%, 93%)",
  },
  gray_600: {
    light: "hsl(88, 0%, 93%)",
    dark: "hsl(88, 0%, 93%)",
  },
  blue_200: {
    light: "hsla(216, 100%, 79%, 1)",
    dark: "hsla(216, 100%, 79%, 1)",
  },
  blue_300: {
    light: "hsla(216, 64%, 56%, 1)",
    dark: "hsla(216, 64%, 56%, 1)",
  },
  green_200: {
    light: "hsla(94, 14%, 97%, 1)",
    dark: "hsla(94, 14%, 97%, 1)",
  },
  green_300: {
    light: "hsla(94, 4%, 88%, 1)",
    dark: "hsla(94, 4%, 88%, 1)",
  },
  layout_border: {
    light: "hsla(131, 20%, 92%, 1)",
    dark: "hsla(131, 6%, 20%, 1)",
  },
  text_color_main: {
    light: "hsla(123, 0%, 7%, 1)",
    dark: "hsla(123, 0%, 92%, 1)",
  },
  text_color_main_inverted: {
    light: "hsla(123, 0%, 92%, 1)",
    dark: "hsla(123, 0%, 7%, 1)",
  },
  background_main: {
    light: "hsla(52, 0%, 98%, 1)",
    dark: "hsla(195, 10%, 16%, 1)",
  },
  background_main_inverted: {
    light: "hsla(131, 6%, 20%, 1)",
    dark: " hsla(115, 44%, 33%, 1)",
  },
  background_secondary: {
    light: "hsla(123, 19%, 38%, 1)",
    dark: "hsla(115, 44%, 33%, 1)",
  },
  background_tertiary: {
    light: "hsla(89, 70%, 85%, 1)",
    dark: "hsla(89, 70%, 85%, 1)",
  },
  card_border: {
    light: "hsl(88, 20%, 93%)",
    dark: "hsla(195, 10%, 3%, 1)",
  },
  card_background: {
    light: "hsla(69, 100%, 100%, 1)",
    dark: "hsla(195, 10%, 12%, 1)",
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

/*
 * hsla(236, 42%, 22%, 1) // Blue
 * hsla(144, 43%, 12%, 1) // Green
 * hsla(66, 73%, 9%, 1) // yellow
 * hsla(137, 51%, 8%, 1) // dark green
 * hsla(171, 71%, 11%, 1) // green mid
 * */

const themeConfig = {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
};

export default themeConfig;
