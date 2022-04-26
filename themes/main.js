import { ThemeProvider, createTheme } from "@mui/material/styles";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    typography: {
      fontFamily: "'Comfortaa', cursive",
    },
    ...(mode === "dark" && {
      background: {
        paper: "#151D3B",
      },
    }),
  },
});

const darkModeTheme = createTheme(getDesignTokens("dark"));

export default function theme(props) {
  return <ThemeProvider theme={darkModeTheme}>{props.children}</ThemeProvider>;
}
