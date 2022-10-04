import Head from 'next/head';
import LabelBottomNavigation from './Footer';
import DrawerAppBar from './AppBar';
import FooterNav from './FooterNav';
import {Container} from '@mui/material';


export default function Layout({ children }) {
    return (
      <div>
        <Head>
          <title>WorldShaker Interactive:UI/UX</title>
        </Head>
        <DrawerAppBar/>
       
        <main><Container maxWidth={false} disableGutters={true}>{children}</Container></main>
      
        <FooterNav/> 
  

      </div>
    )
  }
  