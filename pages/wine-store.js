import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Container, Item, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Meta from "../components/Meta";
import myLoader from "../components/Loader";

const WineStore = () => {
  return (
    <div>
      <Meta title="Case Study::West-Side German Shepherd Rescue" />
      <Paper
        square={true}
        className="fadeHero"
        mt={0}
        sx={{ minHeight: "50vh", color: "#fff" }}
      >
        <Box
          mt={8}
          component="div"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
              <Box
                component="div"
                mt={4}
                mb={3}
                sx={{ textAlign: "center", height: "152px" }}
              >
                <Typography variant="h1" sx={{ fontSize: "3.0rem" }}>
                 Modern Digital Wine Buying Experience
                </Typography>
                <Typography variant="body1">
                 
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={12}>
            <Box
                component="div"
                p={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ flexgrow: "1" }}
              >
                
                <Grid container spacing={2} sx={{ maxWidth: "md" }}>
                  <Grid item xs={12} sm={3} md={3} lg={3}>
                    <Typography variant="body2">Client </Typography>
                    <Typography variant="body1">Bk Wine Cellar </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3} md={3} lg={3}>
                    <Typography variant="body2">Year</Typography>
                    <Typography variant="body1">2022</Typography>
                  </Grid>
                  <Grid item xs={12} sm={3} md={3} lg={3}>
                    <Typography variant="body2">Role</Typography>
<Box component="ul" className="ulStyle">
                    
                      <li>User Research, Information Architect &amp; Visual Designer</li>
                    
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3} md={3} lg={3}>
                    <Typography variant="body2">What I Did</Typography>
                    <Typography variant="body1">
                      My roles on this project was User Reseracher, Information Architect
                      and Product Designer.  
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Box
        component="div"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ flexGrow: 1, px: 3 }}
      >
        <Grid container mt={6} spacing={0} sx={{ maxWidth: "md" }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5">Overview</Typography>
          
            <Typography variant="h2">About This Project</Typography>
           
            <Typography variant="body1">
              A group of entrepreneurs is opening a new wine store in the Prospect-Lefferts Gardens area to serve an up and coming corridor that does not have any wine stores. As they build out the store they have also engaged WorldShaker, Inc. to design a custom e-commerce solution that speaks to their users and customers. They offer a very curated wine experience to their clients and want to mirror that experience in the user experience on the website.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12} md={12} mb={8}>
              <Typography variant="h2">
                The Problem
              </Typography>

              <Typography variant="body1">
                The Brooklyn Winery needs an e-commerce solution so that their customers can seacrh their online wine inventory and order wine/s for pick up or for local delivery.
              </Typography>
              <Typography variant="h2">
              How Might We...?
            </Typography>
            <Typography variant="body1">
              How might we design an updated experience of .
            </Typography>
            </Grid>
         
            <Grid item xs={12} lg={12} md={12} mb={5}>
            <Typography variant="h5">THE PROCESS & SOLUTION</Typography>
          </Grid>
          
          <Grid item xs={12} lg={12} md={12}>
            <Typography variant="h2">
              Research
            </Typography>
            <Typography variant="body1">
              I recruited a group of people through my social-media network who I know to be wine enthusiasts. I got 9 replies to my posts and seleted 5 people to join me for interviews. My respondents consisted of 5 African American women, ages 35-45, who live in or near the area where the store is being built.
            </Typography>
            <Typography variant="body1">
              My goal was to conduct a contextual inquiry as my research method, and ask questions about their experiences ordering wine and using other wine sites. 
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12} mt={5}>
            <Typography variant="h2">Closed Card-Sorting</Typography>
            <Typography variant="body1">
              Through the closed card-sorting process users gave me insights into
              how the navigation should be organized. I gave users specific
              wines from the top countries, regions, and varietals to place into. As advised by the sommelier wines should be organzed by those categories.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12} md={12} xl={12} mt={5}>
            <Box component="div" mb={6}>
              <Image
                loader={myLoader}
                src="Malikka.jpg"
                className="imageBorderradius"
                alt="Competitors"
                height="695px"
                width="900px"
              ></Image>
            </Box>
           
          </Grid>
          <Grid item xs={12} lg={12} md={12} xl={12} mt={5}>
            <Box component="div" mb={6}>
              <Image
                loader={myLoader}
                src="FarrahD.jpg"
                className="imageBorderradius"
                alt="Competitors"
                height="695px"
                width="900px"
              ></Image>
            </Box>
           
          </Grid>
          <Grid item xs={12} lg={12} md={12} xl={12} mt={5}>
            <Box component="div" mb={6}>
              <Image
                loader={myLoader}
                src="DanielleT.jpg"
                className="imageBorderradius"
                alt="Competitors"
                height="695px"
                width="900px"
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12} mt={5}>
            <Typography variant="h2">Competitve Analysis</Typography>
            <Box component="div" mb={6}>
              <Image
                loader={myLoader}
                src="Malikka.jpg"
                className="imageBorderradius"
                alt="Competitors"
                height="695px"
                width="900px"
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12} mt={5}>
          <Typography variant="h2">Persona</Typography>
          <Box component="div" mb={6}>
              <Image
                loader={myLoader}
                src="BKWinePersona.jpg"
                className="imageBorderradius"
                alt="Persona"
                height="695px"
                width="900px"
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12} mt={5}>
            <Typography variant="h5">Design</Typography>
            <Typography variant="h2">
              Wireframe
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Typography variant="h2">User Flow</Typography>
            <Typography variant="body1">
              
            </Typography>
            <Typography variant="body1">
              
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Typography variant="h5">Visual Design</Typography>
            <Typography variant="h2">Design System</Typography>
            <Typography variant="body1">
              I have incorporated Bootstrap 4/5's design system into my project
              and modified some of it UI elements. I also created some of my own
              UI elements for this system.
            </Typography>
          </Grid>

          <Grid item xs={12} lg={12} mt={5}>
            <Typography variant="h2">
              Great Wine Buying User Experience
            </Typography>
            <Typography variant="body1">
              The visual design incoporates all of the UI elements and
              functionality found in other e-commerce wine sites. I have
              incorporated search and faceted search to help users select wine
              by ratings, price, region and country.
            </Typography>
            <Typography variant="body1">
              The solution is visually appealing as I chose colors and
              typography that appealed to food and wine buyers and add elegance
              to the experience.
            </Typography>
            <Typography variant="body1">
              Consumers can easily navigate the site and find the category of
              wine that they are looking for, add it to their shopping cart, pay
              for it, and select an address for delivery.
            </Typography>
          </Grid>

          <Grid item xs={12} lg={12} mt={5}>
            <Typography variant="h5">Results &amp; Reflections</Typography>
          </Grid>
          <Grid item xs={12} lg={12} mt={5}>
            <Typography variant="h2">
              Great MVP Continuing to Iterate on the Design
            </Typography>
            <Typography variant="body1">
              I have been able to get this project off to a great start towards
              getting BK Wine Cellar first design iterations completed. The
              initial problem has been identified and I am addressing it.
            </Typography>
            <Typography variant="body1">
              Local wine lovers want to be able to search the site –
              bkwinecellar.com - by region, categories and varietals so that
              they can easily find and purchase their favorite wine/s and have
              it delivered.
            </Typography>
          </Grid>

         
        </Grid>
      </Box>
    </div>
  );
};

export default WineStore;
