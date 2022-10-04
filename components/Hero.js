import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container  from '@mui/material/Container';
import { Typography } from '@mui/material';
import lightTheme from '../styles/theme/lightTheme';
import {useState, useEffect} from 'react';
import heroImage from '../public/assets/bg_new.png';
import myLoader from './Loader';


const Hero = () => {
  useEffect(() => {
console.log('use effect')

});
  return (
<Box component="div" className="homeHero" padding={0}> 
<Box p={2}  height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="left" sx={{ flexGrow: 1, px: 3 }}>
<Grid container mt={6} maxWidth='md' spacing={0} sx={{ width:'900px',}}>
    
    <Grid item xs={12} md={12} lg={12} mb={8}>  
<Typography  variant="h1"  mb={2} sx={{ color:'#fafafa', fontSize:'3.6rem', }}>
Data-Driven Design for Humans.
</Typography>
<Typography variant="body2" mb={4} sx={{color:'#fafafa', fontWeight:'400', fontSize:'1rem', textTransform:'none'}}>

UX/UI design and engineering practioners who focus on identifying user pain-points and problems and designing solutions that work.
</Typography>
<Button color="primary" variant="contained" size="large" sx={{width:'160px', }}>
Learn More...
</Button>
</Grid>
</Grid>
  </Box>
</Box>

  );
}
export default Hero