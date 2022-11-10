import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from 'next/link';
//import Link from '@mui/material/Link';
import { LinkProps } from '@mui/material/Link';
import { ThemeProvider } from '@mui/material';
import Slide from '@mui/material/Slide';
import Diversity3SharpIcon from '@mui/icons-material/Diversity3Sharp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {css} from '@emotion/react';
import { alpha } from "@mui/material";
import lightTheme from '../styles/theme/lightTheme';
import { useRouter } from 'next/router';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import Image from "next/image";
import myLoader from "../components/Loader";

const drawerWidth = 240;
const navItems = ['Story', 'Media', 'Contact'];

function DrawerAppBar(props) {
  const router = useRouter();
  const currentRoute = router.pathname;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left', fontSize:'1rem', color:'#ff3d00', }}>
       <List sx={{ horizontal: 'right',}}>
       <Link href="/"><ListItemButton sx={{ textAlign: 'center' }}>Home</ListItemButton></Link>
       <Link href="/story"><ListItemButton sx={{ textAlign: 'center' }}>Story</ListItemButton></Link>
       <Link href="/contact"><ListItemButton sx={{ textAlign: 'center' }}>Contact</ListItemButton></Link>
      </List>  
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
   
    <Box sx={{ display: 'flex', }}>  
    <HideOnScroll {...props}>
      <AppBar component="nav" position="fixed" elevation={0} className="navBG" sx={{width:'100%'}}>
      <Box component="div" direction="row" display='flex' alignItems='center' justifyContent='center'>
        <Toolbar display='flex'  
        sx={{ minHeight:{xs:'64px', 
        sm:'64px', 
        width: "100%",
      maxWidth: '900px',
      mx: "auto" }, marginLeft:{xs:'1rem', lg:'0', sm:'1rem', md:'0', xl:'0'},
      marginRight:{xs:'1rem', lg:'0', sm:'1rem', md:'0', xl:'0'}}}>
        <Box sx={{ flexGrow: 1, }}>
<Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              mr: 16,
              display: { xs: 'block', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
          <Image 
          loader={myLoader}
          src="assets/logows.png" 
          width={56} height={56} 
          alt="Logo">

          </Image>
          </Typography>
            </Box>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, backgroundColor:'#fff', width:'40px', height:'40px', borderRadius:'50%', 
            display: { xs:'block', sm: 'block', md: 'none', horizontal: 'right' }, }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{ display:'flex', display: { xs: 'none', sm: 'none', md:'block', horizontal: 'right', fontSize:'1.8rem', fontWeight:600, } }}>
<Button sx={{mr: 1, color:'#fff'}}><Link href="/">
  
<a className={router.pathname == "/" ? "active" : ""}>Home</a>
</Link>
</Button>
<Button sx={{mr:3, color:'#fff'}}><Link href="/story">
<a className={currentRoute === "/story" 
       ? "active" 
       : "non-active"}>
       Story 
     </a>
</Link>
</Button>
<Button className="contactButton" variant="contained" color="primary">
  <Link href="/contact">
  <a className={currentRoute === "/contact" 
       ? "active" 
       : "non-active"}>
         Contact
     </a>
  
</Link>
</Button>
          </Box> 
        </Toolbar>
    
  </Box>
      </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
        anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md:'none', horizontal:'right' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor:'#fff',},
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
    
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
