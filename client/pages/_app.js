import "tailwindcss/tailwind.css";
import "../styles/_global.css";
import { ThemeProvider } from "next-themes";
import React from "react";


export default ({Component,pageProps}) =>{
    return (
        <ThemeProvider enableSystem={true} attribute="class">
     
            <Component {...pageProps} />
        </ThemeProvider>
        
    );
};

