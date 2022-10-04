import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Item, Paper } from '@mui/material';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import FadeJourneyMap from '../public/assets/FadeJourneyMap.png';


const PageTemplate = () => {
  
  return (
    <Container maxWidth={false} mt={0} disableGutters={true}>
  <Paper square={true} className="fadeHero" mt={0} sx={{minHeight:'50vh', color:'#fff'}}>
        <Box mt={8} component="div" display="flex" justifyContent="center" alignItems="center">
  <Grid container spacing={0}>
     <Grid item xs={12} lg={12}>   
         <Box component="div" mt={4} mb={3} sx={{textAlign:'center', height:'152px'}}>
        <Typography variant="h1" sx={{fontSize:'3.0rem',}}> Dashboard UI/UX Solution</Typography>
               <Typography variant="body1">Publisher, agency, brand and ad campaign management dashboard solution.</Typography>              
           </Box>
            
     </Grid> 
     <Grid item xs={12} lg={12}>
       <Box component="div" p={6} sx={{flexgrow:'1',}}>     
        <Grid container spacing={2}>
<Grid item xs={12} sm={3} md={3} lg={3}>
  <Typography variant="body2">Client </Typography>
<Typography variant="body1">Fade Technology - fadetechnology.com </Typography>
</Grid>
<Grid item xs={12} sm={3} md={3} lg={3}><Typography variant="body2">Year</Typography>
                        <Typography variant="body1">2021</Typography>
                      
                        </Grid>
<Grid item xs={12} sm={3} md={3} lg={3} ><Typography variant="body2">Role</Typography>
                        
                          <ul sx={{marginLeft: '0',}}>
            
            <li>Information Architect &amp; Research</li>
            
                        </ul> 
                        </Grid>

                        <Grid item xs={12} sm={3} md={3} lg={3} >
<Typography variant="body2">What I Did</Typography>            
                   <Typography variant="body1">
My priciple role was Information Architect and I collaborated on research and visual design. I drew low fidelity sketches in design studio, designed site maps and conducted usability testing.

                   </Typography>
</Grid>

</Grid>
                 
         </Box>           
		  </Grid>
     </Grid> 
     </Box>
        </Paper>
       
       
       
    <Box component="div" display="flex" justifyContent="center" alignItems="center" sx={{ flexGrow: 1, px: 3 }}> 
		<Grid container mt={6} spacing={0} sx={{ width:'740px',}}>
    
      <Grid item xs={12} md={12} lg={12}>            
     
                
             
		  </Grid>
        
     <Grid item xs>

       </Grid>
      
		  <Grid item xs={12} lg={12} md={12}>            
      
                
              
          
		  </Grid>
      <Grid item xs={12} lg={12} mt={5}>
     
     
        </Grid>
        
     
      <Grid item xs={12} lg={12} mt={5}>
                  
     
        </Grid>
        <Grid item xs={12} lg={4}>
   
     
   </Grid>
   <Grid item xs={12} lg={4}>
   
     
   </Grid> 
       

     
        
      <Grid item xs={12} lg={12} mt={5}>
   
     
        </Grid>
       
      <Grid item xs={12} lg={12} mt={5}>

      
        </Grid>
        <Grid item xs={12} lg={12} mt={5}>
      
                    
                    
                  
     
        </Grid>
       
      <Grid item xs={12} lg={12} mt={5}>
      
        </Grid>
      <Grid item xs={12} lg={12} mt={5}>
     
                
                   
     
        </Grid>
        <Grid item xs={12} lg={12} mt={5}>
      
                    
      
      

</Grid>

<Grid item xs={12} lg={12} mt={5}>

      
     
     
</Grid>
       
      <Grid item xs={12} lg={12} mt={5}>
      
               
            
                    
     
        </Grid>
       
      <Grid item xs={12} lg={12} mt={5}>
     
     
        </Grid>
        
      <Grid item xs={12} lg={12} mt={5}>
     
     
        </Grid>
        
     
      <Grid item xs={12} lg={12}mt={5}>

     
        </Grid>
        
		</Grid>
	  </Box>
    </Container>
  )
}

export default PageTemplate