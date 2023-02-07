import "tailwindcss/tailwind.css";
import "../styles/_global.css";
import { ThemeProvider } from "next-themes";
import Header from '../layouts/Header';
import ResponsiveMode from "../layouts/ResponsiveMode";
import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../layouts/Footer";

export default ({Component,pageProps}) =>{
    return (
        <>
        <ThemeProvider enableSystem={true} attribute="class">
            <Header />
            <ResponsiveMode />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
       
        <ToastContainer  />
        </>   
    );
};

