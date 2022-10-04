import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Item, Paper } from '@mui/material';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import myLoader from '../components/Loader';


const WestSide = () => {
  
  return (
    <Container maxWidth={false} mt={0} disableGutters={true}>
  <Paper square={true} className="wgsrHero" mt={0} sx={{minHeight:'50vh', color:'#fff'}}>
        <Box mt={8} component="div" ml={2} display="flex" justifyContent="center" alignItems="center">
  <Grid container spacing={2}>
     <Grid item xs={12} lg={12}>   
         <Box component="div" mt={4} mb={3} sx={{textAlign:'center', height:'152px'}}>
        <Typography variant="h1" className="header" mb={3}>WGSR User Experience &amp; Website Redesign</Typography>
               <Typography variant="body1">A complete redesign and improved user experience for West Side German Shepher Rescue.</Typography>              
           </Box>
            
     </Grid> 
     <Grid item xs={12} lg={12}>
       <Box component="div" p={2} display="flex" justifyContent="center" alignItems="center" sx={{flexgrow:'1',}}>     
        <Grid container spacing={2} sx={{maxWidth:'md'}}>
<Grid item xs={12} sm={3} md={3} lg={3} >
  <Typography variant="body2">Client </Typography>
<Typography variant="body1">West Side German Shepherd Rescue - sheprescue.org </Typography>
</Grid>
<Grid item xs={12} sm={3} md={3} lg={3}><Typography variant="body2">Year</Typography>
                        <Typography variant="body1">2021</Typography>
                      
                        </Grid>
<Grid item xs={12} sm={3} md={3} lg={3} ><Typography variant="body2">Role</Typography>
                        <Box component="ul" className="ulStyle" sx={{marginLeft: '0',}}>
                          
            
            <li>Information Architect</li>
            
            
                        </Box>
                        </Grid>

                        <Grid item xs={12} sm={3} md={3} lg={3} >
<Typography variant="body2">What I Did</Typography>            
                   <Typography variant="body1">
My priciple role was Information Architect and I collaborated on research and visual design. I drew low fidelity sketches with pencil and paper, designed site maps and conducted usability testing.

                   </Typography>
</Grid>

</Grid>
                 
         </Box>           
		  </Grid>
     </Grid> 
     </Box>
        </Paper>
       
       
       
    <Box component="div" display="flex" justifyContent="center" alignItems="center" mb={15} sx={{ flexGrow: 1, px: 3 }}> 
		<Grid container mt={6} spacing={0} sx={{ maxWidth:'md',}}>
    
      <Grid item xs={12} md={12} lg={12} mb={8}>            
  
<Typography variant="h5">Overview</Typography>
      <Typography variant="h2" className="header">About This Project</Typography>	
				
				<Typography variant="body1">Our team was tasked with designing a new feature(s) and/or improve an existing feature(s) for our assigned
client(West Side German Shepherd Rescue -shepresue.org), to create a delightful experience for the persona(s) we defined through research. 

				</Typography> 
		  <Typography variant="h2" className="header">The Problem</Typography>	
				<Typography variant="body1">
        German shepherd lovers need a more personable and updated way to select an animal rescue in order to find a german shepherd to add to her family.

          </Typography>
          <Typography variant="h2"className="header">How Might We...?</Typography> 
				<Typography variant="body1">How might we design an updated experience of sheprescue.org for that delivers a more personable experience for their
					customers? The challenge was to design and build a user-centered website for West Side German Shepherd
					Rescue that organized the wines in proper categories and provided navigation and search for
					the user to be able to easily find and purchase wines and have them delivered.
				</Typography> 
                
             
		  </Grid>
      
		  <Grid item xs={12} lg={12} md={12} mb={5}>            
      <Typography  variant="h5">THE PROCESS & SOLUTION</Typography>
					 
		  </Grid>
      <Grid item xs={12} lg={12} md={12} mb={8}>
      <Image loader={myLoader} src="dtprocess.png" alt='' width='1280px' height='215px'></Image>
			
        
     
        </Grid>
        
     
      <Grid item xs={12} lg={12} mb={8}>
                  
      <Typography variant="h2" className="header">Research</Typography>
			
				<Typography variant="body1">
          Our research process consiuted of user surveys, heuristic analysyt, competitive analysis, comparative analysis.
        </Typography>
					  </Grid>
					  <Grid item xs={12} md={12} lg={12} mb={8}>
					  <Typography variant="h2" className="header">1. User Interviews Questions</Typography>
<Box component="ul" className="ulStyle" cmb={6} sx={{}}>
      
						<li>1. Tell me about your experience of finding and adopting your dog online.<ul>
								<li>a. Website used</li>
								<li>b. Timeline (from first search to adoption)</li>
								<li>c. Adoption application process</li>
								<li>d. Retrieving dog</li>
							</ul>
						</li>
						<li>What drew you to your dog specifically?</li>
						<li>Did you have any special considerations when searching for your dog? (e.g. good with
							cats/other dogs/kids, male/female, age, housebroken)</li>
						<li>Why did you use (website they answered in survey) over other websites?<ul>
								<li>a. Was there anything that stood out to you as something the site did well?</li>
								<li>b. Was there anything that stood out to you as something the site did not do
									well?</li>
							</ul>
						</li>
						<li>If you were to looking to adopt another dog, would you use this website again? Why?
						</li>
						<li>Have you ever volunteered with or donated to a shelter or rescue? How was that
							experience?</li>
						<li>Have you ever/would you ever consider hosting a foster dog? Elaborate.</li>
					
     </Box>
   </Grid>
   <Grid item xs={12} sm={12} lg={12} mb={8}>
   <Typography variant="h2" className="header">2.User Survey </Typography>
					<Typography variant="body1">We created a survey and solicited parcipants to participate via social media platforms.</Typography>
			</Grid> 
      <Grid item xs={12} lg={12} mb={8}>
      <Typography variant="h2" className="header">3. Competitive Analysis</Typography>
<Typography variant="body1">We searched for dog rescue sites and one can see the stark differences between sheprescue.org and the other dog rescue or pet sites sites. We looked at a few but for the study I have only included two.</Typography>
<Box component="div" mb={6}>
          <Image loader={myLoader} src="WGSRCompetitive-Analysis-1.png" className="imageBorderradius" alt='West Side Competitive Analysis 1' height='695px' width='900px'>
				 </Image> 
         </Box>
         <Box component="div" mb={6}>
          <Image loader={myLoader} src="WGSRCompetitive-Analysis-2.png" className="imageBorderradius"alt='West Side User Flow' height='695px' width='900px'>
				 </Image> 
         </Box>
         <Box component="div" mb={6}>
          <Image loader={myLoader} src="WGSRCompetitive-Analysis-3.png" className="imageBorderradius" alt='West Side User Flow' height='695px' width='900px'>
				 </Image> 
         </Box>
         <Box component="div" mb={6}>
          <Image loader={myLoader}  src="WGSRCompetitive-Analysis-4.png" className="imageBorderradius" alt='West Side User Flow' height='695px' width='900px'>
				 </Image> 
         </Box> 
        </Grid>
        <Grid item xs={12} lg={12} mb={8}>
      <Typography variant="h2" className="header">3. Comparative Analysis</Typography>
      <Typography variant="body1">We also looked at sites that are not competitor and gatehred a few insights on the visuals and layout of those sites. We focused onthe mobile versions of those sites for our analysis.</Typography>
<Typography variant="body1">A few takeaways:</Typography>
<Box component="ul">
  <li>Don't include entire global navigation, but do include some dropdowns</li>
<li>Lots of small text links, looks very similar to desktop footer
-social media links are Gap branded and easy to understand
-dropdowns easy to spot</li>
<li></li>
</Box>
      <Box component="div" mb={6}>
          <Image loader={myLoader}  src="WGSRComparative-Analysis-1.png" className="imageBorderradius" alt='West Side User Flow' height='695px' width='900px'>
				 </Image> 
         </Box>

     
        </Grid>
         <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>	
					<Typography variant="h2" className="header">4. Affinity Mapping &amp; Data Synthesis</Typography>
					<Typography variant="body1">

          </Typography>
<Box component="div" className="imageBorderradius">
          <Image loader={myLoader} className="imageBorderradius" src="WGSRAffinity-Map.png" width={900} height={506} alt=""></Image>
          </Box>
				</Grid>
					
      <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
      <Typography variant="h2" className="header">Persona</Typography>
      
<Image loader={myLoader} className="imageBorderradius" src="wsgrpersona.jpg" alt='West Side Persona' height='720px' width='1280px'>

</Image>
      
        </Grid>
        {/* <Grid item xs={12} md={12} lg={12} mb={8}>
      
        <Typography variant="h2" className="header">Journey Map</Typography>
                    
                  
     
        </Grid> */}
       
      <Grid item xs={12} lg={12} mb={8}>
      <Typography  variant="h5" className="header">Design</Typography>
					
					<Typography variant="h2" className="header">Design for Search, Dog Bio and Adoption Application</Typography>
      
     
      <Typography variant="body1">Here is the new information architecture that we came up with based on the insights gathered. We eliminated a few pages that made no sense and consolidated that information into other pages.</Typography>     
                   
     
        </Grid>
        
        <Grid item xs={12} lg={12} mb={8}>
        <Typography variant="h2" className="header">User Flow</Typography>
				<Typography variant="body1"> </Typography>
        <Box component="div" className="imageBorderradius">
          <Image loader={myLoader} className="imageBorderradius" src="WGSRUser-Flow.png" alt='West Side User Flow' height='610px' width='900px'>
				 </Image> 
         </Box>
			
</Grid>
<Grid item xs={12} lg={12} mb={8}>
      <Typography  variant="h2" className="header">Site Map</Typography>  
      <Box component="div" className="imageBorderradius">
          <Image loader={myLoader} className="imageBorderradius" src="wgsrsitemapPresentation.png" alt='West Side Sitemap' height='526px' width='900px'>
				 </Image> 
         </Box>        
        </Grid>
<Grid item xs={12} lg={12} mb={8}>
      <Typography  variant="h2" className="header">Sketches</Typography> 
      <Box component="div" className="imageBorderradius" mb={6}>
      <Image loader={myLoader} className="imageBorderradius" src="wgsrsketcheshome.png" alt='West Side Sitemap' height='506px' width='900px'>
				 </Image> 
         </Box> 
         <Box component="div" className="imageBorderradius" mb={6}>
      <Image loader={myLoader} className="imageBorderradius" src="wgsrsketchesDogs.png" alt='West Side Sitemap' height='506px' width='900px'>
				 </Image> 
         </Box> 
         <Box component="div" className="imageBorderradius" mb={6}>
      <Image loader={myLoader} className="imageBorderradius" src="wgsrsketchesMobileMenu.png" alt='West Side Sitemap' height='506px' width='900px'>
				 </Image> 
         </Box>  
         <Box component="div" className="imageBorderradius" mb={6}>
      <Image loader={myLoader} className="imageBorderradius" src="wgsrsketchesDesktop.png" alt='West Side Sitemap' height='506px' width='900px'>
				 </Image> 
         </Box>          
        </Grid>
<Grid item xs={12} lg={12} mb={8}>
<Typography  variant="h5" className="header">Visual Design</Typography>
				<Typography variant="h2" className="header">Mid-fidelity Wireframes</Typography>
			<Typography variant="body1">
        Next in our processs be moved to mid-fidelity wireframes. Here are a few of the mobile and desktop wireframes that we came up with through some iterations.
      </Typography>
      <Box component="div" className="imageBorderradius" mb={6}>
      <Image loader={myLoader} className="imageBorderradius" src="wgsrmidFidelity.png" alt='West Side Mid-Fi Wireframe' height='506px' width='900px'>
				 </Image> 
         </Box> 
       
         <Box component="div" className="imageBorderradius" mb={6}>
      <Image loader={myLoader} className="imageBorderradius" src="wgsrmidFidelity2.png" alt='West Side Mid-Fi Wireframe' height='506px' width='900px'>
				 </Image> 
         </Box>     
</Grid>
       
       
      <Grid item xs={12} lg={12} mt={5}>
      <Typography variant="h2" className="header">Hi-Fidelity Wireframes</Typography>
     <Typography variant="body1">We next moved to our hi-fidelity wireframes and final designs.</Typography>
     <Box component="div" className="imageBorderradius" mb={6}>
      <Image loader={myLoader} className="imageBorderradius" src="wgsrHifidelity1.png" alt='West Side Mid-Fi Wireframe' height='506px' width='900px'>
				 </Image> 
         </Box>  

         <Box component="div" className="imageBorderradius" mb={6}>
      <Image loader={myLoader} className="imageBorderradius" src="wgsrHifidelity2.png" alt='West Side Mid-Fi Wireframe' height='506px' width='900px'>
				 </Image> 
         </Box>
        </Grid>
        
      
        
     
      <Grid item xs={12} lg={12}mt={5}>
      <Typography  variant="h5" className="header">Results & Reflections</Typography>
				<Typography variant="h2" className="header">Fantastic Redesign with Future Improvements to Come</Typography>
			<Typography variant="body1">With a comeplete redesign of sheprescue.org we believe that we have improved the user experience for their customers. The site is no longer outdated and is better organized. The look and feel is clean and with consisten colors and typography.</Typography>
			<Typography variant="body1">We will continue working on the design by conducting usability testing.
			</Typography>
     
        </Grid>
        
		</Grid>
	  </Box>
    </Container>
  )
}

export default WestSide