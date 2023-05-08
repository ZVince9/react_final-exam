import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

const theme = {
  palette: {
    primary: {
      grey: "#d0d0d0",
      darkBlue: "#0e103d",
      red: "#C72B3D",
      softBlue: "#6F58C9",
      pink: "#E2B4BD",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
};

const ThemeProvider = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
