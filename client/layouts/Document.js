import Head from "next/head";
import Footer from "../layouts/Footer";
import Header from "./Header";
import {Navbar} from "../components/Navbar";
import {MenuIcon,CubeIcon} from "@heroicons/react/outline";
import Link from "next/link";
import ResponsiveMode from "./ResponsiveMode";

const Document = ({children}) =>{
  

   return (
    <>
    <Head>
            <title>List coins</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap" rel="stylesheet" /> 
           
    </Head>
        <Header />
        <Navbar icon={<MenuIcon className="h-5 w-5" />}>
            <div className="position absolute left-0 top-full w-full bg-white 
            shadow-md py-3 invisible opacity-0 group-hover: opacity-100 group-hover:visible
            transition duration-300 z-50 divide-y divide-light-cta divide-dashed">

                <Link href="#" className="px-6 py-3 flex items-center 
                hover:bg-slate-100 transition">
                        <CubeIcon className="h-5 w-5 text-light-cta" />
                        <span className="ml-6 text-gray-700 text-sm font-semibold font-popins">
                            Premium
                        </span>
                </Link>

                <Link href="#" className="px-6 py-3 flex items-center 
                hover:bg-slate-100 transition">
                        <CubeIcon className="h-5 w-5 text-light-cta" />
                        <span className="ml-6 text-gray-700 text-sm font-semibold font-popins">
                            Premium
                        </span>
                </Link>

                <Link href="#" className="px-6 py-3 flex items-center 
                hover:bg-slate-100 transition">
                        <CubeIcon className="h-5 w-5 text-light-cta" />
                        <span className="ml-6 text-gray-700 text-sm font-semibold font-popins">
                            Premium
                        </span>
                </Link>

                <Link href="#" className="px-6 py-3 flex items-center 
                hover:bg-slate-100 transition">
                        <CubeIcon className="h-5 w-5 text-light-cta" />
                        <span className="ml-6 text-gray-700 text-sm font-semibold font-popins">
                            Premium
                        </span>
                </Link>

                <Link href="#" className="px-6 py-3 flex items-center 
                hover:bg-slate-100 transition">
                        <CubeIcon className="h-5 w-5 text-light-cta" />
                        <span className="ml-6 text-gray-700 text-sm font-semibold font-popins">
                            Premium
                        </span>
                </Link>

            </div>
        </Navbar>
         <ResponsiveMode />

        
        <div className="h-full">
            {children}
        </div>
        <Footer />   
    </>
      
   );
     
}

export default Document;