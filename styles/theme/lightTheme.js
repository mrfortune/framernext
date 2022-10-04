import { createTheme } from '@mui/material/styles';
import { red, pink, green, purple, grey, blue } from '@mui/material/colors';


const lightTheme = createTheme({
    palette: {
        primary: {
          main: purple['A700'],
        },
        secondary: {
          main: grey[50],
        },
      },
      overrides: {
        MuiCssBaseline: {
          '@global': {
      body:{
        background: 'rgb(242,242,242)',
background: 'linear-gradient(180deg, rgba(242,242,242,1) 0%, rgba(209,209,209,1) 33%, rgba(195,195,195,1) 100%);',
backgroundRepeat: "no-repeat",
backgroundAttachment: "fixed",
      },
    },
  },
},
      logo:{
    width:'40px',
      },
      // components:{
      //   MuiContainer:{
      //   styleOverrides:{
      //                   root:{
      //                       border:"1px solid black",
      //                       borderRadius:8,
      //           },
      //           },
      //         },
      // },
      typography: {
        breakpoints: {
          values: {
            xs: 0,
            sm: 425,
            md: 768,
            lg: 1024,
            xl: 1280,
            '2xl': 1536,
            '3xl': 1920,
            '4xl': 2560,
            '5xl': 3200,
          },
        },
        h1: {
          fontFamily:'Merriweather',
          fontSize: '1.802rem',
          fontWeight: 800,
        },
        
        h2:{
          fontFamily:'Merriweather',
    fontWeight:400,
    fontSize:'1.602rem',
    marginBottom:'1.75rem'
        },
        h3: {
          fontFamily:'Merriweather',
    fontSize:'1.424rem',
        },
        h4: {
          fontFamily:'Merriweather',
          fontSize:'1.266rem',
        },
        h5: {
          fontSize:'1.125rem',
          textTransform: 'uppercase',
          fontWeight: '500',
          marginBottom:'5rem',
          textAlign:'center',
            },
        body1:{
            fontSize: '1rem',
            marginBottom: '1.5rem',
            fontWeight:'500',
            
        },
        body2:{
          fontSize: '.8rem',
          marginBottom: '1rem',
          textTransform:'uppercase',
          fontWeight:700,
      },
        fontFamily: 'Lato',
      },
     
      
    

    
});

export default lightTheme;