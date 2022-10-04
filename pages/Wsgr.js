import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { Box, Grid, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

const Wsgr = () => {
  return (
	<Container maxWidth={false} mt={0} disableGutters={true}>
<Grid container spacing={2} mt={15} mb={15}>

		<Grid item xs={12} lg={12} md={12}>
		<Typography variant="h1">Improved Dog Rescue and Adoption User Experience.</Typography>
		<Typography variant="body1">Redesign of West Side German Shepherd Rescue's website better user experience.</Typography>
	   
		  </Grid>
		  <Grid item xs={12} lg={12} md={12}>
			  <Grid container spacing={2}>
				  <Grid item xs={12} sm={4} md={4} lg={4}>
				  <Typography variant="h3">Overview</Typography>
					<Typography variant="body1">West Side German Shepherd Rescue's website needs a complete overhaul and look and feel to
						deliver a better user experience for it's customers.
					</Typography>
					  </Grid>
				  <Grid item xs={12} sm={4 }md={4} lg={4}>
				  <Typography variant="h3">The Team &amp; Timeframe</Typography>
					<Typography variant="body1">The project time frame was a 2 week sprint.
					</Typography>
					<ul>
						<li>Madeline Lipkin, Lead UX Researcher</li>
						<li>Robert Harris, Lead Information Architect</li>
						<li>Belinda Miller, Lead Visual Designer</li>
					</ul>
					  </Grid>
				  <Grid item xs={12} sm={4} md={4} lg={4}>
				  <Typography variant="h3">Tools &amp; Methods Used</Typography>
					<ul><li>Affinity Mapping</li>
					<li>User Interviews</li>
					<li>User Surveys</li>
					<li>Competitive &amp; Comparative Analysis</li>
					<li> Miro</li>
					<li> Figma</li>
					<li>Adobe CC</li>
					<li>Usability Test</li>
					</ul>

					  </Grid>
			</Grid>
		</Grid>
		</Grid>
		<Box component="div" display="flex" justifyContent="center" alignItems="center" sx={{ flexGrow: 1, px: 3 }}> 
		<Grid container mt={6} spacing={0} sx={{ width:'740px',}}>
		  <Typography variant="h5">Solution Overview</Typography>
		  <Typography variant="h2">Problem</Typography>	
					<Typography variant="h2">How might we...?</Typography>
				
				<Typography variant="body1">How might we design an adoption website for West Side German Shepherd Rescue's
					customer? The challenge was to design and build a user-centered website for West Side German Shepherd
					Rescue that organized the wines in proper categories and provided navigation and search for
					the user to be able to easily find and purchase wines and have them delivered.
				</Typography>
			  </Grid>
			  <Grid item xs={12} lg={12}>
			  <Typography  variant="h5">Approach</Typography>
					
					<Typography variant="h2">Seek Users Who Have or Are Adopting Dogs
					</Typography>
				<Typography variant="body1">Our approach to this project was to seek out users who have adopted dogs or are currently adopting dogs and ask them questions about their experience and sites that they used. We also looked at other adoption sites to get an idea of how the competitors sites look.</Typography>
				  </Grid>
				  <Grid item xs={12} lg={12}>
				  <Image src="/assets/dtprocess.png" alt='' width='1280px' height='215px'></Image>
				
				
			
			<Typography variant="body1">West Side German Shepherd Rescue's new website solution will provide its customers with the
				ability to search for a dog to adopt and submit the adoption application.</Typography>

<Typography variant="h3">Research</Typography>
<Typography variant="h4">Persona</Typography>
			
				<Typography variant="h2">Dog Lover Looking to Adopt a German Shepherd</Typography>
				<Typography variant="body1">Our persona - Carol Olsen - is the summary of the users that we researched who use websites to adopt dogs and plan to or have adopted dogs in the past.</Typography>
					  </Grid>
					  <Grid item xs={12} lg={12}>
					  <Typography variant="h4">1. User Interviews</Typography>
						<Typography variant="body1">By observing the participants within the context of buying wine at an, and during, I was able
							to question and observe how they order wine and why they use the method that they use -
							mobile phone. As people arrived over the 5 or 6 hours that we were gathered we talked about
							their favorite local wine stores and their sites and apps.</Typography>
							<Typography variant="h6">Interview Questions:</Typography>
						  </Grid>
						  <Grid item xs={12} lg={12}>
						  <ul>
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
					</ul>
						</Grid>
						<Grid item xs={12} lg={12}>
						<Typography variant="h4">2.User Survey </Typography>
					<Typography variant="body1">We created a survey and solicited parcipants to participate via social media platforms.</Typography>
					<Typography variant="h6">Data Gathered</Typography>
					
					<Typography variant="h4">3. Affinity Mapping &amp; Data Synthesis</Typography>
					<Typography variant="body1">By observing the participants within the context of buying wine at an, and during, I was able
						to question and observe how they order wine and why they use the method that they use -
						mobile phone. As people arrived over the 5 or 6 hours that we were gathered we talked about
						their favorite local wine stores and their sites and apps.</Typography>
					<Typography variant="h6">Data Gathered:</Typography>
					
					<Typography variant="h4">2. Competitive Analysis</Typography>
					</Grid>
					<Grid item xs={12} lg={12}>
					<Typography variant="h2">Competitors Have Great Looking Websites</Typography>
<Typography variant="body1">A quick search for dog rescue sites and one can see the stark difference between sheprescue.org and other dog rescue sites. We looked at a few but for the study I have only included two.</Typography>
					</Grid>
					<Grid item xs={12} lg={12}>
					<Typography variant="h2">Persona</Typography>
<Image src="/assets/wsgrpersona.jpg" alt='West Side Persona' height='720px' width='1280px'>

</Image>
					</Grid>
					<Grid item xs={12} lg={12}>
					<Typography variant="h2">Journey Map</Typography>

					</Grid>

					<Grid item xs={12} lg={12}>
					<Typography  variant="h5">Design</Typography>
					
					<Typography variant="h2">Design for Search, Dog Bio and Adoption Application</Typography>
						</Grid>
						<Grid item xs={12} lg={12}>
						<Typography variant="h4">Site Maps</Typography>	
				<Typography variant="body1">Here is the new information architecture that we came up with based on the insights gathered. We eliminated a few pages that made no sense and consolidated that information into other pages.</Typography>
							</Grid>
							<Grid item xs={12} lg={12}>

							<Typography variant="h4">User Flow</Typography>
				<Typography variant="body1">We created a user flow that expects to be able to search and/or go directly to the wine
					varietals, regions and coutries that the customer is looking for. If a user is signed up
					he/she can see the wines that they bought and repurchase it/them. </Typography>
				<Typography variant="body1">No matter what choice the user makes, they will be able now check out and complete their
					purchase online and select delivery to a selected address.</Typography>
							</Grid>
							<Grid item={12} lg={12}>
							<Typography  variant="h5">Visual Design</Typography>
				<Typography variant="h2">Let's Get Some Wireframes Done</Typography>
				<Typography variant="body1">The visual design incorporates all of the UI elements and functionality found in other
						e-commerce wine sites. We have incorporated search and faceted search to help users select
						wine by ratings, price, region and country.</Typography>
							</Grid>
							<Grid item xs={12} lg={12}>
							<Typography variant="h2">Easily Find the Dog You Like and Apply to Adopt</Typography>
				<Typography variant="body1">We began this process with some low-fidelity sketches and wireframes and we quickly turned those in mid-fidelity wireframes.
					We began by ddesigning the mobile experience first and then designed the desktop expeience once we settled on the direction that we wanted to go in.</Typography>
							</Grid>
							<Grid item xs={12} lg={12}>
							<Typography variant="h4">Mobile Version</Typography>
						{/* <img src="img/wsgrmobileshots.png" class="img-fluid mt-5 mb-5 border rounded"> */}
						<Typography variant="h4">Desktop Version</Typography>
						{/* <img src="img/wsgr-desktop.jpg" class="img-fluid border mt-5 mb-5 rounded"> */}
							</Grid>
							<Grid item xs={12} lg={12}>
							<Typography  variant="h5">Results & Reflections</Typography>
				<Typography variant="h2">Fantastic Redesign with Future Improvements to Come</Typography>
			<Typography variant="body1">With a comeplete redesign of sheprescue.org we believe that we have improved the user experience for their customers. The site is no longer outdated and is better organized. The look and feel is clean and with consisten colors and typography.</Typography>
			<Typography variant="body1">We will continue working on the design by conducting usability testing.
			</Typography>
								</Grid>
</Box>
	  </Container>
	
  )
}

export default Wsgr