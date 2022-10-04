import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme, Container, responsiveFontSizes } from '@mui/material';
//import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import '@nextcss/reset';
import Layout from '../components/Layout';

// let lightTheme = createTheme();
// lightTheme = responsiveFontSizes(lightTheme);

// const clientSideEmotionCache = createEmotionCache();
// const MyApp = (props) => {
// const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
//   return (
//     <CacheProvider value={emotionCache}>
//       <ThemeProvider theme={responsiveFontSizes(lightTheme, { breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'], factor: 3 })}>
//         <CssBaseline />
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </ThemeProvider>
//     </CacheProvider>
//   );
// };

// export default MyApp;

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   emotionCache: PropTypes.object,
//   pageProps: PropTypes.object.isRequired,
// };

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