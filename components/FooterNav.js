import React from "react";
import { Paper } from "@mui/material";
import { Container, Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Facebook from "@mui/icons-material/Facebook";
import { Instagram } from "@mui/icons-material";

const FooterNav = () => {
  return (
    <div>
      <Paper
        className="footerBG"
        square={true}
        sx={{ bottom: 0, left: 0, right: 0, color: "#fff" }}
        elevation={3}
      >
        <Box
          component="div"
          pb={2}
          pr={0}
          mr={0}
          pt={2}
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Grid container sx={{ maxWidth: "md" }}>
            <Grid item xs={12} sm={12} lg={4} md={4} xl={4}>
              <Box
                component="ul"
                sx={{
                  padding: "0 0",
                  listStyle: "none",
                  display: "grid",
                  gap: "8px",
                  color: "#fff",
                }}
              >
                <Box component="li" mb={1}>
                  <Typography variant="h4">Menu</Typography>
                </Box>
                <Box component="li">
                  <Link href="/">Home</Link>
                </Box>
                <Box component="li">
                  <Link href="/story">Story</Link>
                </Box>
                <Box component="li">
                  <Link href="/contact">Contact</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <Box
                component="ul"
                sx={{
                  padding: "0 0",
                  listStyle: "none",
                  display: "grid",
                  gap: "8px",
                  color: "#fff",
                }}
              >
                <Box component="li" mb={1}>
                  <Typography variant="h4" className="header">
                    Resources
                  </Typography>
                </Box>
                <Box component="li">
                  <Link href="/">Terms</Link>
                </Box>
                <Box component="li">
                  <Link href="/">Privacy</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              
              <Box component="div" mb={2} mt={2}>
                <Typography
                  variant="h4"
                  className="header"
                  sx={{ color: "#fff" }}
                >
                  Sharing
                </Typography>
              </Box>
              <Box component="div"
              position='right'
                sx={{
                  padding: "0 0",
                  color: "#fff",
                
                }}
              >
                <Link href="http://linkedin.com/in/robertsharris">
                  <a>
                    <LinkedIn fontSize="medium" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Facebook fontSize="medium" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Instagram fontSize="medium" />
                  </a>
                </Link>
              </Box>
              
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              md={12}
              mt={4}
              sx={{ textAlign: "center" }}
            >
              <Typography variant="subtitle" sx={{ fontSize: ".7rem" }}>
                &copy; 2022 WorldShaker Interactive, Inc. All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};

export default FooterNav;
