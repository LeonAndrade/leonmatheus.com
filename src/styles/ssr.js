/* This function in injected to the HTML and runs on the browser */
function setColorByTheme() {
  const colors = "{{COLORS}}";
  const colorModeKey = "{{COLOR_MODE_KEY}}";
  const colorModeCssProp = "{{COLOR_MODE_CSS_PROP}}";

  const hasSystemPreference = window.matchMedia("(prefers-color-scheme: dark");
  const prefersDark = hasSystemPreference.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  // Default color mode if no match was found.
  let colorMode = "light";

  // Found a color theme in local storage
  const hasUsedToggle = typeof persistedPreference === "string";

  // Favour local storage, if none, check for system preference, else set light theme.
  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDark ? "dark" : "light";
  }

  let root = document.documentElement;

  // Set theme properties as css variables to the document root
  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const CssVarName = `--${name}`;

    root.style.setProperty(CssVarName, colorByTheme[colorMode]);
  });
}

/* This function is injected to the react code and runs on the server */
export const ThemeScript = ({ config }) => {
  const boundFn = String(setColorByTheme)
    .replace('"{{COLORS}}"', JSON.stringify(config.COLORS))
    .replace('"{{COLOR_MODE_KEY}}"', JSON.stringify(config.COLOR_MODE_KEY))
    .replace(
      '"{{COLOR_MODE_CSS_PROP}}"',
      JSON.stringify(config.INITIAL_COLOR_MODE_CSS_PROP),
    );

  let calledFunction = `(${boundFn})()`;

  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

/*
 * This is a fallback if the user has diasabled JS.
 * It will run on the server and inject a base style tag for the light theme in the html selector
 * */
export const ThemeFallback = ({ config }) => {
  const colorObj = config.COLORS;
  const cssVariableString = Object.entries(colorObj).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--${name}: ${colorByTheme.light};`;
    },
    "",
  );
  const wrappedInSelector = `html { ${cssVariableString} }`;
  return <style>{wrappedInSelector}</style>;
};
