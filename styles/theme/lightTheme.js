import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red, pink, green, purple, grey, amber, darkOrange, blue, orange, deepOrange } from "@mui/material/colors";

const lightTheme = createTheme({
  typography:{
    fontFamily: 'futura-pt',
  },
  palette: {
    primary: {
       main: blue[700],
    },
    secondary: {
      main: deepOrange["A400"],
    },
  },
  MuiAppBar: {
    styleOverrides: {
      colorPrimary: {
        backgroundColor: "red"
      },
    },
  },
  logo: {
    width: "40px",
  },
  typography: {
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
        "3xl": 1920,
        "4xl": 2560,
        "5xl": 3200,
      },
    },
    h1: {
      // fontFamily: "Merriweather",
      fontSize: "3.052rem",
      fontWeight: 800,
    },

    h2: {
      // fontFamily: "Merriweather",
      fontWeight: 500,
      fontSize: "2.441rem",
      marginBottom: "1.5rem",
    },
    h3: {
      // fontFamily: "Merriweather",
      fontSize: "1.953rem",
    },
    h4: {
      fontWeight: 400,
      // fontFamily: "Merriweather",
      fontSize: "1.563",
    },
    h5: {
      fontSize: "1.125rem",
      textTransform: "uppercase",
      fontWeight: "500",
      marginBottom: "6rem",
      textAlign: "center",
    },
    body1: {
      fontSize: "1.2rem",
      marginBottom: "1.5rem",
      fontWeight: "400",
    },
    body2: {
      fontSize: "1rem",
      marginBottom: "1.5rem",
      textTransform: "uppercase",
      fontWeight: 400,
    },
    fontFamily: 'futura-pt', 
  },
  
});

export default lightTheme;
