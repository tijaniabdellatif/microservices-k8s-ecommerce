import Link from "next/link";
import { Children } from "react";

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
                        <Link className="ml-auto text-light-primary hover:text-light-cta hover:dark:text-dark-secondary transition font-semibold" href="/auth/register">
                                        Login - Register
                        </Link>
                    </div>
            </div>
         </div>
       </nav>
     );
}

