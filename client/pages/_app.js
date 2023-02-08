import "tailwindcss/tailwind.css";
import "../styles/_global.css";
import { ThemeProvider } from "next-themes";
import Header from '../layouts/Header';
import ResponsiveMode from "../layouts/ResponsiveMode";
import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../layouts/Footer";




const AppComponent =  ({Component,pageProps,currentUser}) =>{
   
    console.log(currentUser)
    return (
        <>
        <ThemeProvider enableSystem={true} attribute="class">
         
            <Header currentUser={currentUser} />
            <ResponsiveMode />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
       
        <ToastContainer  />
        </>   
    );
};

AppComponent.getInitialProps = async (appContext) => {

    let pageProps = {};
    if(typeof window === 'undefined' && appContext.ctx.req){
        const response = await fetch('http://10.102.202.216:3000/api/users/current',{
            headers:appContext.ctx.req.headers,
            method:'GET',
            cache:'no-store'
         });
         const currentUser = await response.json();

         
         if(appContext.Component.getInitialProps){
            pageProps = await appContext.Component.getInitialProps(appContext.ctx);
         }

         if(currentUser.errors){

              return { 
                 currentUser:null
              }
         }
          
       
         return {
              
                 ...currentUser,
                 pageProps
              
         }
    }

    

        const response = await fetch('/api/users/current',{
           
            method:'GET',
            cache:'no-store'
         });

         const currentUser = await response.json();
         return {

            currentUser
         }
    

}

// AppComponent.getInitialProps = async ({Component,ctx}) =>  {

//     let pageProps = {};
       
//     if(typeof window === 'undefined'){
//         const response = await fetch('http://10.98.203.124:3000/api/users/current',{
//             headers:ctx.req.headers,
//             method:'GET',
//             cache:'no-store'
//          });
        
//          const currentUser = await response.json();
//          if(Component.getInitialProps){
  
//            pageProps = await Component.getInitialProps(ctx);
           
//            return {

//             ...currentUser,
//             pageProps:pageProps
//         }
//         }
//         else {

//             return {
//                 currentUser:currentUser
//             } 

//         }  
//     }

    
     
//  }


 export default AppComponent;