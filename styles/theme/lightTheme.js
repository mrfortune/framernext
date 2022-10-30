import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red, pink, green, purple, grey, blue } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: purple["A700"],
    },
    secondary: {
      main: grey[50],
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          background: "rgb(242,242,242)",
          background:
            "linear-gradient(180deg, rgba(242,242,242,1) 0%, rgba(209,209,209,1) 33%, rgba(195,195,195,1) 100%);",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
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
      fontWeight: 400,
      fontSize: "2.441rem",
      marginBottom: "1.5rem",
    },
    h3: {
      // fontFamily: "Merriweather",
      fontSize: "1.953rem",
    },
    h4: {
      fontWeight: 300,
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
