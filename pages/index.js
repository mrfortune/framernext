import {
  Button,
  Box,
  CardActionArea,
  CardActions,
  Stack,
  Card,
  Item,
  Container,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NextUIProvider } from "@nextui-org/react";
import Meta from "../components/Meta";
import { AnimatePresence } from "framer-motion";
import { Card5 } from '../components/Card5';
import { Card1 } from '../components/Card1';

export default function Home() {
  return (
    <div>
      <Meta title="WorldShaker Interactive::Home" />
      <Box
        component="div"
        className="homeHero"
        padding={0}
        mb={10}
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box component="div" sx={{ maxWidth: "md", width:'900px'}}>
         
          <Box
            component="div"
            mt={2}
            sx={{ display: "block", 
            width:{xs:'100%', sm:'40%', md:'45%', lg:'55%', xl:'55%'}, 
            textAlign:{xs:'center', sm:'left', md:'left', lg:'left', xl:'left'},
            height:'auto',}}
          > 
          <motion.div
          initial={{x: -950}}
          animate={{x: 1}}
          transition={{ duration: 1.0}}
          >
            <Typography 
            initial={{ opacity: 0 }}
            transition={{ease: "easeOut", duration: 2.5 }}
            variant="h1" className="display" mb={2} >
              Data-Driven Design for Humans
            </Typography>
            <Typography
            className="headerBody"
              variant="body1"
              mb={4}
              sx={{
                fontWeight: "500",
                textTransform: "none",
              }}
            >
              UI/UX designers, developers, and design thinking practitioners who apply a data-driven, human-centered design approach to solving problems.
            </Typography>
            <motion.div>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              sx={{ width: "160px" }}
            >
              <Link href="/story">Learn More...</Link>
            </Button>
            </motion.div>
            </motion.div>
          </Box>
          
        </Box>
      </Box>

      <Box
      className="homePage"
        direction="row"
        mb={8}
        display="flex"
        justifyContent="center"
        component="div"
      >
        <Grid container spacing={2} sx={{ maxWidth: "md" }}>

          
          <Grid  item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="h2" sx={{ color: "#333", textAlign: "left" }}>
              What We Do
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} sm={12} lg={12}>
          <motion.div
  initial={{ opacity: 0 }}
    transition={{ease: "easeOut", duration: 2.5 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}>
            <Box
              component="div"
              ml={0}
              className="whatWeDo"
              height="100%"
              display="flex"
              
            ></Box>
            </motion.div>
            
          </Grid>
          <Grid item  xs={12} sm={12} md={12} lg={12}>
            <Typography
              variant="h2"
              mb={4}
              sx={{ color: "#333", textAlign: "left" }}
            >
              Brands Worked For
            </Typography>
            <Typography variant="body1">
              Worked as a Front-end Developer, Project Manager, Web Producer &amp;
              Designer, and Design Technologist for these brands.
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
          <motion.div
  initial={{ opacity: 0 }}
  transition={{ duration: 2.5 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}>
            <Box
              component="div"
              className="ourProjects"
              height="100%"
              display="flex"
            ></Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h2" sx={{ color: "#333", textAlign: "left" }}>
              Case Studies
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} mb={8}>
          <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 2.5 }}
  >
    
        <Card1 />
    
            {/* <Card
              square={false}
              className="MuiPaper-rounded"
              sx={{ display: "flex" }}
            >
              <Box
                p={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "66.66%",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    component="div"
                    variant="h3"
                    className="lineClamp"
                  >
                    Fade Technology Solutions
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    mb={3}
                    component="div"
                    className="lineClamp"
                  >
                    Explore the process of designing a B2B dashboard with
                    data-visualization and ad campaign management tools.
                  </Typography>

                  <Button size="small" variant="text" sx={{color:'#FF5722'}}>
                    <Link href="/fade-solutions"> Read More...</Link>
                  </Button>
                </CardContent>
              </Box>
              
            </Card> */}
            </motion.div>
          </Grid>
          <Grid  item  xs={12} sm={12} md={6} lg={6} xl={6} mb={8}>
          <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 2.5 }}
  >
    
        <Card5 />
     
            {/* <Card
              square={false}
              className="MuiPaper-rounded"
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "66.66%",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    component="div"
                    variant="h3"
                    className="lineClamp"
                  >
                    West Side German Shepherd Rescue
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    mb={3}
                    className="lineClamp"
                  >
                    Let's walk through the dog adoption process that we explored
                    and the assumptions, insights, and final design of
                    sheprescue.org.
                  </Typography>

                  <Button size="small" variant="text" sx={{color:'#FF5722'}}>
                    <Link href="/west-side-german-shepherd"> Read More...</Link>
                  </Button>
                </CardContent>
              </Box>
            </Card> */}
            </motion.div>
          </Grid>

        </Grid>
      </Box>
    </div>
  );
}
