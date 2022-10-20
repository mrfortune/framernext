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

export default function Home() {
  return (
    <div>
      <Meta title="WorldShaker Interactive:Home" />
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
        <Box component="div" p={2} sx={{ maxWidth: "md" }}>
          <Box
            component="div"
            mt={2}
            sx={{ display: "block", 
            width:{xs:'100%', sm:'40%', md:'45%', lg:'45%', xl:'45%'}, 
            textAlign:{xs:'center', sm:'left', md:'left', lg:'left', xl:'left'},
            height:'auto',}}
          >
            <Typography variant="h1" className="display" mb={2} sx={{ fontSize:'2.280rem', color: "#fafafa" }}>
              Data-Driven Design for Humans.
            </Typography>
            <Typography
            className="headerBody"
              variant="body1"
              mb={2}
              sx={{
                color: "#fafafa",
                fontWeight: "400",
                textTransform: "none",
              }}
            >
              UX/UI design and engineering practioners who focus on identifying
              user pain-points and problems and designing solutions that work.
            </Typography>
            <Button
              color="primary"
              variant="contained"
              size="large"
              sx={{ width: "160px" }}
            >
              <Link href="/story">Learn More...</Link>
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        direction="row"
        mb={8}
        display="flex"
        ml={2}
        justifyContent="center"
        component="div"
      >
        <Grid container spacing={2} sx={{ maxWidth: "md" }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h2" sx={{ color: "#333", textAlign: "left" }}>
              What We Do
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} sm={12} lg={12}>
            <Box
              component="div"
              ml={0}
              className="whatWeDo"
              height="100%"
              display="flex"
              initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
            ></Box>
            
          </Grid>
        </Grid>
      </Box>

      <Box
        component="div"
        direction="row"
        mb={10}
        display="flex"
        ml={2}
        justifyContent="center"
      >
        <Grid container spacing={2} sx={{ maxWidth: "md" }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              variant="h2"
              mb={4}
              sx={{ color: "#333", textAlign: "left" }}
            >
              Brands Worked For
            </Typography>
            <Typography variant="body1">
              Worked as a UX Engineer, Project Manager, Web Producer &amp;
              Designer, and Design Technologist for these brands.
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Box
              component="div"
              ml={0}
              className="ourProjects"
              height="100%"
              display="flex"
            ></Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        component="div"
        direction="row"
        ml={2}
        mr={2}
        display="flex"
        justifyContent="center"
      >
        <Grid container spacing={2} sx={{ maxWidth: "md" }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h2" sx={{ color: "#333" }}>
              Case Studies
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12} mb={8}>
            <Card
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

                  <Button size="small" variant="text" color="primary">
                    <Link href="/fade-solutions"> Read More...</Link>
                  </Button>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                height="225"
                width="300"
                sx={{ width: 300 }}
                background-size="cover"
                image="/assets/fadecardImage.png"
                alt="Fade Technology Solutions"
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={12} lg={12} mb={8}>
            <Card
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

                  <Button size="small" variant="text" color="primary">
                    <Link href="/west-side-german-shepherd"> Read More...</Link>
                  </Button>
                </CardContent>
              </Box>

              <CardMedia
                component="img"
                width="300"
                height="225"
                sx={{ width: 300 }}
                image="/assets/wgsrcardimage.png"
                alt="WGSR"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
