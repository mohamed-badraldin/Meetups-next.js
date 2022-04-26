import "../styles/globals.css";
import { Layout } from "../components/layout/Layout";
import { SessionProvider } from "next-auth/react";
import { Paper } from "@mui/material";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useState } from "react";

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
      text: {
        primary: "#fff",
        secondary: "#fff",
      },
    }),
    ...(mode === "light" && {
      background: {
        paper: "#EEEEEE",
      },
    }),
  },
});

const darkModeTheme = createTheme(getDesignTokens("dark"));
const lightModeTheme = createTheme(getDesignTokens("light"));

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <ThemeProvider theme={darkMode ? darkModeTheme : lightModeTheme}>
        <SessionProvider session={session}>
          <Paper sx={{ minHeight: "100vh" }}>
            <Layout>
              <IconButton onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <Component {...pageProps} />
            </Layout>
          </Paper>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
