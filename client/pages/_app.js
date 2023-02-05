import "tailwindcss/tailwind.css";
import "../styles/_global.css";
import { ThemeProvider } from "next-themes";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default ({Component,pageProps}) =>{
    return (
        <>
        <ThemeProvider enableSystem={true} attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
        <ToastContainer  />
        </>   
    );
};

