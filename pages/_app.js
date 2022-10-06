import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme, Container, responsiveFontSizes } from '@mui/material';
//import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
// import '@nextcss/reset';
import Layout from '../components/Layout';


function MyApp({ Component, pageProps}){
  return(
    <ThemeProvider theme={lightTheme}>
  <CssBaseline />
  <Layout>
 <Component {...pageProps} />
  </Layout>
  </ThemeProvider>
  
  )
}

export default MyApp