
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import {MenuIcon,CubeIcon} from "@heroicons/react/outline";
import Head from "next/head";

 function Index({currentUser}){

    console.log('From component',currentUser)
   return(<>
         <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>List coins - Home Page</title>
         </Head>
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
   </>)
}


Index.getInitialProps = async (context) =>  {

    if(typeof window === 'undefined'){
       const response = await fetch('http://10.98.203.124:3000/api/users/current',{
          headers:context.req.headers,
          method:'GET',
          cache:'no-store'
       });

      
       const currentUser = await response.json();
       console.log('backend : ',currentUser)
      
 
    
       return {
            props:{
               currentUser
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


export default Index;

