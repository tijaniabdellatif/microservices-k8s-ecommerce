
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import {MenuIcon,CubeIcon} from "@heroicons/react/outline";
import Head from "next/head";

 const Index = ({currentUser}) => {
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


        <section className="w-full">

        </section>
   </>)
}


Index.getInitialProps = async (context) =>  {

    console.log('Landing page');
    if(typeof window === 'undefined' && context.req){
        const response = await fetch('http://10.108.87.199:3000/api/users/current',{
            headers:context.req.headers,
            method:'GET',
            cache:'no-store'
         });
  
        
         const currentUser = await response.json();
         return {
              
                currentUser
              
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


export default Index;

