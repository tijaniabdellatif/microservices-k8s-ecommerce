import "tailwindcss/tailwind.css";
import "../styles/_global.css";
import { ThemeProvider } from "next-themes";
import Head from 'next/head';
import Header from '../layouts/Header';
import ResponsiveMode from "../layouts/ResponsiveMode";
import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default ({Component,pageProps}) =>{
    return (
        <>
        <Head>
        <title>List coins</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap" rel="stylesheet" /> 
        </Head>
       
        
        <ThemeProvider enableSystem={true} attribute="class">
            <Header />
            <ResponsiveMode />
            <Component {...pageProps} />
        </ThemeProvider>
       
        <ToastContainer  />
        </>   
    );
};

