import React from "react";
import PropTypes from "prop-types";
import createEmotionCache from "../utility/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Container,
  responsiveFontSizes,
} from "@mui/material";
//import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from "../styles/theme/lightTheme";
import "../styles/globals.css";
// import '@nextcss/reset';
import Layout from "../components/Layout";

let theme = createTheme();
theme = responsiveFontSizes(lightTheme);

const clientSideEmotionCache = createEmotionCache();
function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
