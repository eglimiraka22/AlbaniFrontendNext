import React from 'react';
import Head from 'next/head';
import Navbar from './navbar';
import { Inter } from 'next/font/google';
import logo from '../../public/logo.png';
import Footer from './footer';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children ,title }) => {
  return (
    < >
      {/* Custom head elements go here */}
      <Head>
        {/* Meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Albanian NEws"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" />

 
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add more meta tags as needed */}

        {/* Favicon */}
        <link rel="icon" href={logo.src} type="image/png" sizes="100x100" />
        {/* Add more link tags as needed for stylesheets, favicons, etc. */}

        {/* Custom title */}
        <title>{title ||"Home | Albanian News"}</title>
        <meta property="og:title" content="My page title" key="title" />

      </Head>

      <Navbar />
     <div className={`${inter.className} main-page-wrapper`}>{children}</div> 
    </>
  );
};

export default Layout;
