import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import Meta from "../components/Meta";
import myLoader from "../components/Loader";
import Image from "next/image";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <div>
      <Meta title="WorldShaker Interactive::Story" />
      <Box
        component="div"
        mt={15}
        mb={15}
        direction="row"
        display="flex"
        justifyContent="center"
      >
        <Grid
          container
          pl={1}
          pr={2}
          spacing={2}
          sx={{ paddingLeft: "16px", maxWidth: "md" }}
        >
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Typography variant="h1" mb={6}>
              The Story
            </Typography>
            <Typography variant="h2"  mb={2}>
              Robert S. Harris, Design Thinking Practitioner &amp; Product Designer
            </Typography>
             <Box
              component="span"
              display="flex"
              alignItems="center"
              sx={{
                "& > :not(style)": {
                  mr: 1,
                },
              }}
            >
              {/* <Link href="/assets/RobertSHarris.pdf">
                <a>
                  <DownloadIcon sx={{ fontSize: 32 }} />
                </a>
              </Link> */}
              <Link href="http://linkedin.com/in/robertsharris">
                <a>
                  <LinkedInIcon sx={{ fontSize: 32 }} />
                </a>
              </Link>
            </Box>
          </Grid>
           
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {/* <Typography
              variant="subtitle1"
              mb={1}
              sx={{ textTransform: "none", fontWeight: "600" }}
            >
              UI/UX Developer &amp; Designer | Design Thinking Practitioner |
              Product Manager
            </Typography> */}
           
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
            <Image
              loader={myLoader}
              src="RSHarris.png"
              alt="Robert Harris"
              width="599px"
              height="599px"
            ></Image> 
            </motion.div>
              </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Typography mb={2} variant="body1">
              Hi, folks! I'm Robert Harris. I am a Design Thinking Practioner &amp; Product Designer. I have worked for large brands and start-ups successfully
              identifying user problems and pain-points and delivering products
              and solutions for their customers and accomplishing business
              goals. I work in collaboration with stakeholders, and
              cross-functional teams to deliver and launch solutions.
            </Typography>
            <Typography mb={2} variant="body1">
              My love for design began as a child where I would sketch for
              hours, and I developed a love for drawing characters and creating
              figures with clay. I was always trying to create something new and
              interesting. That creative interest evolved into music, video and
              photography, so when the Web became ubiquitous it was obvious how
              tech, business and creative work would merge into an interactive
              experience. I did not realize it at the time but that was my first
              insight into the world of user experience.
            </Typography>
            <Typography mb={2} variant="body1">
              My degree in business trained me to think about marketing,
              management, statistics, and the challenges involved with
              succeeding in business. I learned to develop websites, and then I
              learned online video production, photography and how to translate
              compositions into code.
            </Typography>
            <Typography mb={2} variant="body1">
              WorldShaker Interactive was founded to solve a problem that my
              cousin and I had identified, wrote a complete business plan for
              and designed a mock-up. Our plan did not get funded but I see it
              everytime I visit SoundCloud. I'm not saying that they stole our
              plan, but their business model for artists is basically what we
              had developed. Glad to see that our assumptions proved to be right
              and a solution for many independent artists and users to enjoy
              unsigned artists.
            </Typography>
            <Typography mb={2} variant="body1">
              I am still designing soltuons to problems and who knows may come
              up with another idea that can shake the world. But, for now, I am
              happy to share my skills with companies small, medium and large to
              help them deliver better user experiences to their customers.
            </Typography>
          </Grid>
        </Grid>
       
      </Box>
    </div>
  );
};
export default Story;
