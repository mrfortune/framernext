import Head from 'next/head';
import DrawerAppBar from './AppBar';
import FooterNav from './FooterNav';
import {Container} from '@mui/material';
import Meta from './Meta';

export default function Layout({ children }) {
    return (
      <div>
        <Meta/>
        <DrawerAppBar/>
        <main><Container  maxWidth={false} disableGutters={true}>{children}</Container></main>
        <footer><FooterNav/> </footer>
      </div>
    )
  }
  