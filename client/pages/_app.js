import "tailwindcss/tailwind.css";
import "../styles/_global.css";
import { ThemeProvider } from "next-themes";
import Header from '../layouts/Header';
import ResponsiveMode from "../layouts/ResponsiveMode";
import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../layouts/Footer";




const AppComponent =  ({Component,pageProps}) =>{
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


AppComponent.getInitialProps = async ({Component,ctx}) =>  {

    let pageProps = {};
    
    if(typeof window === 'undefined'){

       
       const response = await fetch('http://10.98.203.124:3000/api/users/current',{
          headers:ctx.req.headers,
          method:'GET',
          cache:'no-store'
       });

       if(Component.getInitialProps){

         pageProps = await Component.getInitialProps(ctx);
       }
       console.log("Page props",pageProps);
       const currentUser = await response.json();
        console.log('from appComponnent',currentUser);
      
 
    
       return {
            props:{
               currentUser:currentUser.currentUser
            }
       }
    }
 
    else {
 
       const response = await fetch('/api/users/current',{

       method:'GET'
    });
    const currentUser = await response.json();
 
    console.log('current user front',currentUser);
 
    return {
         props:{
 
             currentUser
         }
    }
 
    }
      
 }


 export default AppComponent;