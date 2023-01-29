import Head from "next/head";
import Footer from "../layouts/Footer";
import Header from "./Header";
import { Html } from "next/document";
const Document = ({children}) =>{
  
   return (
    <>
    <Head>
            <title>Nextjs-Dev Blog</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap" rel="stylesheet" /> 
           
          </Head>
         
         
         <Header />

        
        <div className="container h-40 bg-light-secondary dark:bg-dark-primary">
            {children}
        </div>


            <Footer />
         
         
         
    </>
      
   );
     
}

export default Document;