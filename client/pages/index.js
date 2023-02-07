import { useEffect, useState } from "react";
import Document from "../layouts/Document";
import { toast } from 'react-toastify';
import Link from "next/link";
import { TruckIcon } from "@heroicons/react/outline";
import CategoriesFeature from "../components/utils/CategoriesFeature";

export default function Index(){

   return(<h1>Home page</h1>)
}
// export async function getServerSideProps(context){
//    if(typeof window === 'undefined'){
//       const response = await fetch('http://10.99.211.111:3000/api/users/current',{
//          headers:context.req.headers,
//          method:'GET',
//          cache:'no-store'
//       });
//       const currentUser = await response.json();

//       return {
//            props:{
//               currentUser
//            }
//       }
//    }

//    else {

//       const response = await fetch('/api/users/current',{
//       headers:context.req.headers,
//       method:'GET'
//    });
//    const currentUser = await response.json();

//    console.log(currentUser);

//    return {
//         props:{

//             currentUser
//         }
//    }

//    }
     
// }





// const Index =  () =>{

//    const [authorized,setAuthorized] = useState(true);

//    useEffect(() =>{

//         if(currentUser.errors){

//             setAuthorized(false);
//             toast.error(currentUser.errors[0].message);


//         }

//         setAuthorized(true);
        
//    },[authorized]);
   
//    return (

//       <Document>
//         <div className="bg-cover bg-no-repeat bg-center py-36 relative" style={{ backgroundImage:`url('../images/beg.jpg')` }}>
           
//              <div className="container">
//                <h1 className="xl:text-6xl md:text-5xl text-4xl text-light-secondary font-quicksand font-semibold mb-4">Best Collection For <br className="hidden sm:block" /> Clothes and lingerie</h1>
//                <p className="font-quicksand text-base text-light-primary leading-6">

//                lorem ipsum dolor flex eighrlorem ipsum dolor flex eighrlorem ipsum dolor flex eighrlorem
//                <br className="hidden sm:block" /> ipsum dolor flex eighrlorem ipsum dolor flex eighr
//                lorem ipsum dolor flex eighrlorem ipsum 
//                </p>
//                <div className="mt-12 ">
//                <Link href='#' className=" transition ease-in-out delay-150 bg-dark-cta border border-dark-cta text-white px-8 py-3 font-medium font-quicksannd rounded-md uppercase hover:bg-white hover:text-dark-cta">
//                      Shop now
//                </Link>
//                </div>
//              </div>
//         </div>

//         {/* Features */}

//         <div className="container py-16">

//           <div className="lg:w-10/12 grid md:grid-cols-3 lg:gap-6 mx-auto justify-center">
//                <div className="cursor-pointer border-dark-cta border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 transition hover:border-slate-400 hover:bg-light-cta duration-300">
//                      <TruckIcon className="lg:w-12 w-10 h-12 object-contain text-dark-cta" />
//                      <div>
//                         <h4 className="font-quicksand capitalize text-lg">Free shipping</h4>
//                         <p className="text-gray-500 text-xs lg:text-sm">Order over 200 MAD</p>

//                      </div>
//                </div>

//                <div className="cursor-pointer border-dark-cta border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 transition hover:border-slate-400 hover:bg-light-cta duration-300">
//                      <TruckIcon className="lg:w-12 w-10 h-12 object-contain text-dark-cta" />
//                      <div>
//                         <h4 className="font-quicksand capitalize text-lg">Money Returns</h4>
//                         <p className="text-gray-500 text-xs lg:text-sm">30 days Money returns</p>

//                      </div>
//                </div>

//                <div className="cursor-pointer border-dark-cta border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 transition hover:border-slate-400 hover:bg-light-cta duration-300">
//                      <TruckIcon className="lg:w-12 w-10 h-12 object-contain text-dark-cta" />
//                      <div>
//                         <h4 className="font-quicksand capitalize text-lg">24/7 Support</h4>
//                         <p className="text-gray-500 text-xs lg:text-sm">Customer Support</p>

//                      </div>
//                </div>
//           </div>
//         </div>

//         <CategoriesFeature  />
//       </Document>
//    );
// }

// export default Index;