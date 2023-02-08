import Link from "next/link";
import { HeartIcon,ShoppingCartIcon} from "@heroicons/react/outline";
import{UserGroupIcon} from "@heroicons/react/solid";
export function Navbar ({icon,children}) {

     return (
       <nav className="bg-dark-secondary dark:bg-light-cta hidden lg:block">

         <div className="container">
            <div className="flex">
                        <div className="px-8 py-4 bg-light-cta dark:bg-dark-secondary flex items-center cursor-pointer group relative">
                      <span className="text-white">
                      {icon}
                      </span>
                      <span className="font-quicksand capitalize ml-2 text-white">
                        All Pack's
                      </span>

                      {children}
                        </div>

                        <div className="flex items-center justify-between flex-grow pl-12 ">
                        <div className="flex items-center space-x-6 text-base capitalize">
                                <Link className="text-light-primary hover:text-light-cta hover:dark:text-dark-secondary transition font-semibold" href="/">
                                        Home
                                </Link>

                                <Link className="text-light-primary hover:text-light-cta hover:dark:text-dark-secondary transition font-semibold" href="#">
                                        Shop
                                </Link>

                                <Link className="text-light-primary hover:text-light-cta hover:dark:text-dark-secondary transition font-semibold" href="/setup">
                                        About us
                                </Link>

                                <Link className="text-light-primary hover:text-light-cta hover:dark:text-dark-secondary transition font-semibold" href="#">
                                        contact us
                                </Link>
                        </div>
                        {/* <Link className="ml-auto text-light-primary hover:text-light-cta hover:dark:text-dark-secondary transition font-semibold" href="/auth/register">
                                        Login - Register
                        </Link> */}
                 <div className="space-x-4 flex items-center">
                        {/* <Link href="/auth/register" className="block text-center text-white hover:text-light-cta transition relative flex flex-col items-center">
                        
                        <UserGroupIcon className="w-6 h-6 text-white dark:text-white" />
                        <div className="text-xs dark:text-white">Account</div>
                        </Link>
                         */}
                        <Link href="#" className="block text-center text-white hover:text-light-cta transition relative flex flex-col items-center">
                        <span className="absolute text-center left-7 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-dark-cta text-white text-xs
                        ">5</span>
                        <HeartIcon className="w-6 h-6 text-white dark:text-white" />
                        <div className="text-xs dark:text-white leading-3">Wish List</div>
                        </Link>
                        
                        <Link href="#" className="block text-center text-white hover:text-light-cta transition relative flex flex-col items-center">
                        <span className="absolute text-center left-4 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-dark-cta text-white text-xs
                        ">5</span>
                        <ShoppingCartIcon className="w-6 h-6 text-white dark:text-white" />
                        <div className="text-xs dark:text-white">Cart</div>
                        </Link>
                </div>
                 </div>

                       
            </div>
         </div>
       </nav>
     );
}

