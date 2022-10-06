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

const Story = () => {
  return (
    <div>
      <Meta title="Story" />
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
          spacing={2}
          sx={{ paddingLeft: "16px", maxWidth: "md" }}
        >
          <Grid item xs={11} md={8} lg={9}>
            <Typography variant="h1" className="header" mb={6}>
              Story
            </Typography>
            <Typography variant="h2" mb={2}>
              <Box component="span" sx={{ fontWeight: "400" }}>
                Robert S. Harris
              </Box>
            </Typography>
            <Typography
              variant="subtitle1"
              mb={1}
              sx={{ textTransform: "none", fontWeight: "600" }}
            >
              UX Engineer &amp; Designer | Design Thinking Practitioner |
              Aspiring Product Manager
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
              <Link href="RH-UX.pdf">
                <a>
                  <DownloadIcon sx={{ fontSize: 40 }} />
                </a>
              </Link>
              <Link href="http://linkedin.com/in/robertsharris">
                <a>
                  <LinkedInIcon sx={{ fontSize: 40 }} />
                </a>
              </Link>
            </Box>
          </Grid>
          <Grid item mt={2} xs={11} md={8} lg={9}>
            <Typography mb={2} variant="body1">
              I am a UX engineer, architech, designer and design thinking
              practitioner. I have worked for large brands successfully
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
        <Grid item xs={1} md={4} lg={3}></Grid>
      </Box>
    </div>
  );
};
export default Story;
